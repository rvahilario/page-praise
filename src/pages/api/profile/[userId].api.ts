import { prisma } from '@/src/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const userId = String(req.query.userId)

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  if (!user) {
    return NextResponse.json(
      { message: 'User does not exist.' },
      { status: 400 },
    )
  }

  const formattedUserRatings = user?.ratings.map((rating) => {
    const { book } = rating
    const categories = book.categories.map(({ category }) => category.name)

    return {
      id: rating.id,
      rate: rating.rate,
      description: rating.description,
      createdAt: rating.created_at,
      book: {
        id: book.id,
        name: book.name,
        author: book.author,
        summary: book.summary,
        coverUrl: book.cover_url,
        totalPages: book.total_pages,
        createdAt: book.created_at,
        categories,
      },
    }
  })

  const pagesReadCount = formattedUserRatings.reduce((acc, rating) => {
    return acc + rating.book.totalPages
  }, 0)

  const authorsReadCount = (() => {
    const namesAuthorsRead = formattedUserRatings.reduce<string[]>(
      (acc, { book }) => {
        if (!acc.includes(book.author)) {
          return [...acc, book.author]
        }
        return acc
      },
      [],
    )

    return namesAuthorsRead.length
  })()

  function getMostReadCategory() {
    const categories = formattedUserRatings.reduce<
      { name: string; count: number }[]
    >((acc, { book }) => {
      const bookCategories = book.categories.map((bookCategory) => {
        const categoryIndex = acc.findIndex((c) => bookCategory === c.name)

        return {
          name: bookCategory,
          count: categoryIndex >= 0 ? acc[categoryIndex].count++ : 1,
        }
      })

      return [...acc, ...bookCategories]
    }, [])

    if (!categories.length) {
      return ''
    }

    return categories.sort((a, b) => b.count - a.count)[0].name
  }

  const profileData = {
    id: user.id,
    name: user.name,
    avatarUrl: user?.avatar_url,
    createdAt: user.created_at,
    ratings: formattedUserRatings,
    pagesReadCount,
    authorsReadCount,
    mostReadCategory: getMostReadCategory(),
  }

  return res.json(profileData)
}
