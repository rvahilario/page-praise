import { PageTitle } from '@/src/components/PageTitle'
import { BookCard } from '@/src/components/BookCard'
import { Text } from '@/src/components/Typography'
import { useLatestRatings } from '@/src/hooks/useLatestRatings'
import { ChartLineUp } from '@phosphor-icons/react'
import {
  Container,
  LatestContainer,
  BooksSection,
  GridContainer,
} from './styles'
import { useUserLatestRating } from '@/src/hooks/useUserLatestRating'
import { useSession } from 'next-auth/react'
import { BookCardColumn } from '@/src/components/BookCardColumn'
import { usePopularBooks } from '@/src/hooks/usePopularBooks'

export const Home = () => {
  const { data: session } = useSession()
  const userId = session?.user?.id

  const { data: ratings, isLoading, isError } = useLatestRatings()

  const { data: latestUserRating } = useUserLatestRating(userId)
  const { data: popularBooks } = usePopularBooks()

  if (isLoading) {
    return <div>Loading...</div>
  }

  // TODO: implement error handling to other fetches
  if (isError || !ratings) {
    return <div>Error fetching latest ratings.</div>
  }

  return (
    <Container>
      <PageTitle title="Home" icon={<ChartLineUp size={32} />} />

      <GridContainer>
        <div>
          {latestUserRating && (
            <LatestContainer>
              <header>
                <Text size={'sm'}>Your Last Book Rating</Text>
              </header>
              <BookCard rating={latestUserRating} noUser />
            </LatestContainer>
          )}

          <Text size="sm">Latest Ratings</Text>
          <BooksSection>
            {ratings?.map((rating) => (
              <BookCard key={rating.id} rating={rating} />
            ))}
          </BooksSection>
        </div>

        <div>
          <Text size={'sm'}>Popular Books</Text>
          <BooksSection>
            {popularBooks?.map((book) => (
              <BookCardColumn
                key={`popular-${book.id}`}
                book={book}
                isCompact
              />
            ))}
          </BooksSection>
        </div>
      </GridContainer>
    </Container>
  )
}
