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
  SectionHeader,
} from './styles'
import { useUserLatestRating } from '@/src/hooks/useUserLatestRating'
import { useSession } from 'next-auth/react'
import { BookCardColumn } from '@/src/components/BookCardColumn'
import { usePopularBooks } from '@/src/hooks/usePopularBooks'
import { LinkNavigation } from '@/src/components/LinkNavigation'

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
              <SectionHeader>
                <Text size={'sm'}>Your Last Book Rating</Text>
                <LinkNavigation text="See all" href={`/profile/${userId}`} />
              </SectionHeader>
              <BookCard rating={latestUserRating} noUser />
            </LatestContainer>
          )}

          <SectionHeader>
            <Text size="sm">Latest Ratings</Text>
          </SectionHeader>
          <BooksSection>
            {ratings?.map((rating) => (
              <BookCard key={rating.id} rating={rating} />
            ))}
          </BooksSection>
        </div>

        <div>
          <SectionHeader>
            <Text size={'sm'}>Popular Books</Text>
            <LinkNavigation text="See all" href={`/explore`} />
          </SectionHeader>
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
