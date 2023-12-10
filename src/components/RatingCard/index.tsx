/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Book, Rating, User } from '@prisma/client'
import Link from 'next/link'
import {
  BookContent,
  BookDetails,
  BookImage,
  Container,
  ToggleShowMoreButton,
  UserDetails,
} from './styles'
import { Heading, Text } from '../Typography'
import { Avatar } from '../Avatar'
import { useToggleShowMore } from '@/src/hooks/useToggleShowMore'
import { RatingWithAuthorAndBook } from '@/src/@types/rating'

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: 'default' | 'compact'
}

const MAX_SUMMARY_LENGTH = 180 // characters

export const RatingCard = ({
  rating,
  variant = 'default',
}: RatingCardProps) => {
  const {
    text: bookSummary,
    toggleShowMore,
    isShowingMore,
  } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  console.log('rating.book.cover_url', rating.book.cover_url)
  return (
    <Container variant={variant}>
      {variant === 'default' && (
        <UserDetails>
          <section>
            {/* TODO: link to profile */}
            <Link href={`/profile`}>
              <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
            </Link>
            <div>
              <Text>{rating.user.name}</Text>
              <Text size="sm" color="gray-400"></Text>
            </div>
          </section>
        </UserDetails>
      )}

      <BookDetails>
        {/* TODO: link to book page */}
        <Link href={`/explore`}>
          <BookImage
            width={108}
            height={152}
            alt={rating.book.name}
            src={rating.book.cover_url}
          />
        </Link>
        <BookContent>
          <div>
            <Heading size={'md'}>{rating.book.name}</Heading>
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
