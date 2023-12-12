import { PageTitle } from '@/src/components/PageTitle'
import { BookCard } from '@/src/components/BookCard'
import { Text } from '@/src/components/Typography'
import { useLatestRatings } from '@/src/hooks/useLatestRatings'
import { ChartLineUp } from '@phosphor-icons/react'
import { Container, LatestContainer, RatingsSection } from './styles'
import { useUserLatestRating } from '@/src/hooks/useUserLatestRating'
import { useSession } from 'next-auth/react'

export const Home = () => {
  const { data: session } = useSession()
  const userId = session?.user?.id

  const { data: ratings, isLoading, isError } = useLatestRatings()
  console.log('ratings', ratings)

  const { data: latestUserRating } = useUserLatestRating(userId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !ratings) {
    return <div>Error fetching latest ratings.</div>
  }

  return (
    <Container>
      <PageTitle title="Home" icon={<ChartLineUp size={32} />} />

      {latestUserRating && (
        <LatestContainer>
          <header>
            <Text size={'sm'}>Your Last Book Rating</Text>
          </header>
          <BookCard rating={latestUserRating} noUser />
        </LatestContainer>
      )}

      <Text size="sm">Latest Ratings</Text>
      <RatingsSection>
        {ratings?.map((rating) => <BookCard key={rating.id} rating={rating} />)}
      </RatingsSection>

      {/* <Text size={'sm'}>Livros populares</Text>
      <section>
        {popularBooks?.map((book) => (
          <BookCard key={`popular-${book.id}`} book={book} size={'md'} />
        ))}
      </section> */}
    </Container>
  )
}
