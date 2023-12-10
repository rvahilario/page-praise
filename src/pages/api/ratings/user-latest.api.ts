import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../auth/[...nextauth].api'
import { prisma } from '@/src/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  if (!session) {
    return res.status(401).end()
  }

  const latestUserRating = await prisma.rating.findFirst({
    where: {
      // user_id: String(session.user.id), TODO: fix this
      user_id: String('48e458c0-8b1e-4994-b85a-1e1cfcc9dd60'),
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })
  return res.json(latestUserRating)
}
