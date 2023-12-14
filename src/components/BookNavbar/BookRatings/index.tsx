import { useSession } from 'next-auth/react'
import { Session } from 'next-auth'
import Link from 'next/link'
import { Container, UserDetails, UserRatingContainer } from './styles'
import { Heading, Text } from '../../Typography'
import { LinkNavigation } from '../../LinkNavigation'
import { RatingWithUser } from '@/src/@types'
import { Avatar } from '../../Avatar'
import { RatingStars } from '../../RatingStars'

type BookRatingsProps = {
  ratings: RatingWithUser[]
}

export const BookRatings = ({ ratings }: BookRatingsProps) => {
  const { data: session } = useSession()

  // User logged in can evaluate only if they haven't previously reviewed the book
  const canRate = ratings.every((x) => x.user_id !== session?.user?.id)

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  return (
    <Container>
      <header>
        <Text>Ratings</Text>
        {canRate && (
          <LinkNavigation
            withoutIcon
            onClick={() => console.log('open rating form')}
            text="Rate"
          />
        )}
      </header>
      <section>
        {sortedRatingsByDate &&
          ratings.map((rating) => (
            <UserRatingCard key={rating.id} rating={rating} session={session} />
          ))}
      </section>
    </Container>
  )
}

type UserRatingCardProps = {
  rating: RatingWithUser
  session: Session | null
}

export const UserRatingCard = ({ rating, session }: UserRatingCardProps) => {
  const distance = new Date(rating.created_at)
  const isOwner = session?.user?.id === rating.user_id

  return (
    <UserRatingContainer isOwner={isOwner}>
      <UserDetails>
        <section>
          <Link href={`/profile/${rating.user_id}`}>
            <Avatar alt={rating.user.name} src={rating.user.avatar_url!} />
          </Link>
          <div>
            <Heading size="xs">{rating.user.name}</Heading>
            <Text size="sm" color="gray-400">
              {distance.toString()}
            </Text>
          </div>
        </section>
        <RatingStars value={rating.rate} />
      </UserDetails>
      <Text size="sm" color={'gray-300'}>
        {rating.description}
      </Text>
    </UserRatingContainer>
  )
}
