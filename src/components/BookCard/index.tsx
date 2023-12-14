/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Link from 'next/link'
import {
  BookContent,
  BookDetails,
  BookImage,
  CompactDetails,
  Container,
  ToggleShowMoreButton,
  UserDetails,
} from './styles'
import { Heading, Text } from '../Typography'
import { Avatar } from '../Avatar'
import { useToggleShowMore } from '@/src/hooks/useToggleShowMore'
import { RatingWithUserAndBook } from '@/src/@types'
import { RatingStars } from '../RatingStars'
import { useSelectedBook } from '@/src/hooks/useSelectedBook'

type BookCardProps = {
  rating: RatingWithUserAndBook
  noUser?: boolean
}

const MAX_SUMMARY_LENGTH = 180 // characters

export const BookCard = ({ rating, noUser = false }: BookCardProps) => {
  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  const { handleShowBookNavbar } = useSelectedBook()

  return (
    <Container noUser={noUser}>
      {!noUser && (
        <UserDetails>
          <section>
            <Link href={`/profile/${rating.user_id}`}>
              <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
            </Link>
            <div>
              <Text>{rating.user.name}</Text>
              <Text size="sm" color="gray-400">
                Today{/* TODO: implements day distance */}
              </Text>
            </div>
          </section>
          <RatingStars value={rating.rate} />
        </UserDetails>
      )}

      <BookDetails>
        {/* TODO: link to book page */}
        <Link href={`/explore`} onClick={handleShowBookNavbar}>
          <BookImage
            width={108}
            height={152}
            alt={rating.book.name}
            src={rating.book.cover_url}
          />
        </Link>
        <BookContent>
          <div>
            {noUser && (
              <CompactDetails>
                <Text size="sm" color="gray-300">
                  Today{/* TODO: implements day distance */}
                </Text>
                <RatingStars value={rating.rate} />
              </CompactDetails>
            )}
            <Heading size="sm">{rating.book.name}</Heading>
            <Text size="sm" color="gray-400">
              {rating.book.author}
            </Text>
          </div>

          <Text size="sm" color="gray-300">
            {bookSummary}
            {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
              <ToggleShowMoreButton onClick={toggleShowMore}>
                {isShowingMore ? 'show less' : 'show more'}
              </ToggleShowMoreButton>
            )}
          </Text>
        </BookContent>
      </BookDetails>
    </Container>
  )
}
