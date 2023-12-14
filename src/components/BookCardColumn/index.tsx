import Link from 'next/link'
import {
  BookContent,
  BookDetails,
  BookImage,
  BookSummary,
  Container,
  ReadBadge,
  ToggleShowMoreButton,
} from './styles'
import { Heading, Text } from '../Typography'
import { useToggleShowMore } from '@/src/hooks/useToggleShowMore'
import { BookWithAvgRating } from '@/src/@types'
import { RatingStars } from '../RatingStars'
import { useSelectedBook } from '@/src/hooks/useSelectedBook'

type BookCardColumnProps = {
  book: BookWithAvgRating
  isCompact?: boolean
  imgSize?: 'sm' | 'md' | 'lg'
}

const MAX_SUMMARY_LENGTH = 180 // characters
const IMAGE_SIZE = {
  height: {
    sm: 94,
    md: 134,
    lg: 152,
  },
  width: {
    sm: 64,
    md: 98,
    lg: 108,
  },
}

export const BookCardColumn = ({
  book,
  isCompact = false,
  imgSize = 'md',
}: BookCardColumnProps) => {
  console.log('book', book)
  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(book.summary, MAX_SUMMARY_LENGTH)

  const { handleShowBookNavbar } = useSelectedBook()

  return (
    <Container isCompact={isCompact}>
      {book?.alreadyRead && <ReadBadge>READ</ReadBadge>}
      <BookDetails>
        {/* TODO: link to book page */}
        <Link href={`/explore`} onClick={handleShowBookNavbar}>
          <BookImage
            height={IMAGE_SIZE.height[imgSize]}
            width={IMAGE_SIZE.width[imgSize]}
            alt={book.name}
            src={book.cover_url}
          />
        </Link>

        <BookContent>
          <div>
            <Heading size={isCompact ? 'xs' : 'sm'}>{book.name}</Heading>
            <Text size="sm" color="gray-400">
              {book.author}
            </Text>
          </div>

          <RatingStars value={book.avgRating} />
        </BookContent>
      </BookDetails>

      {!isCompact && (
        <BookSummary>
          <Text size="sm" color="gray-300">
            {bookSummary}
            {book.summary.length > MAX_SUMMARY_LENGTH && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? 'show less' : 'show more'}
              </ToggleShowMoreButton>
            )}
          </Text>
        </BookSummary>
      )}
    </Container>
  )
}
