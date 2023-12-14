import React from 'react'
import {
  BookContent,
  BookDetailsContainer,
  BookDetailsWrapper,
  BookImage,
  BookInfos,
} from './styles'
import { Heading, Text } from '../../Typography'
import { RatingStars } from '../../RatingStars'
import { ItemDetail } from '../../ItemDetail'
import { BookOpen, BookmarkSimple } from '@phosphor-icons/react'
import { BookDetails } from '@/src/@types'

type BookDetailsProps = {
  book: BookDetails
}

export const BookInfo = ({ book }: BookDetailsProps) => {
  const ratingsLength = book?.ratings?.length ?? 0
  const categories =
    book?.categories?.map((x) => x?.category?.name)?.join(', ') ?? ''

  return (
    <BookDetailsWrapper>
      <BookDetailsContainer>
        <BookImage
          width={171}
          height={242}
          alt={book?.name}
          src={book.cover_url}
        />

        <BookContent>
          <div>
            <Heading size="sm">{book.name}</Heading>
            <Text color="gray-300" css={{ marginTop: '$2' }}>
              {book.author}
            </Text>
          </div>
          <div>
            <RatingStars value={4} />
            <Text color="gray-400" size={'sm'} css={{ marginTop: '$1' }}>
              {`${ratingsLength}  
            ${ratingsLength === 1 ? 'rating' : 'ratings'}`}
            </Text>
          </div>
        </BookContent>
      </BookDetailsContainer>

      <BookInfos>
        <ItemDetail
          icon={<BookmarkSimple />}
          label="Categories"
          info={categories}
          isInverted
        />
        <ItemDetail
          icon={<BookOpen />}
          label="Pages"
          info={String(book.total_pages)}
          isInverted
        />
      </BookInfos>
    </BookDetailsWrapper>
  )
}
