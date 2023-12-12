import Link from 'next/link'
import {
  BookContent,
  BookDetails,
  BookImage,
  BookSummary,
  Container,
  ToggleShowMoreButton,
} from './styles'
import { Heading, Text } from '../Typography'
import { useToggleShowMore } from '@/src/hooks/useToggleShowMore'
import { BookWithAvgRating } from '@/src/@types'
import { RatingStars } from '../RatingStars'

type BookCardColumnProps = {
  book: BookWithAvgRating
  isCompact?: boolean
}

const MAX_SUMMARY_LENGTH = 180 // characters

export const BookCardColumn = ({
  book,
  isCompact = false,
}: BookCardColumnProps) => {
  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(book.summary, MAX_SUMMARY_LENGTH)

  return (
    <Container isCompact={isCompact}>
      <BookDetails isCompact={isCompact}>
        {/* TODO: link to book page */}
        <Link href={`/explore`}>
          <BookImage
            width={isCompact ? 64 : 108}
            height={isCompact ? 94 : 152}
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
