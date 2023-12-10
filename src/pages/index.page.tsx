import { PageTitle } from '../components/PageTitle'
import { ChartLineUp } from '@phosphor-icons/react'
import { useLatestRatings } from '../hooks/useLatestRatings'
import { Text } from '../components/Typography'
import { RatingCard } from '../components/RatingCard'

const HomePage = () => {
  const { data: ratings, isLoading, isError } = useLatestRatings()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !ratings) {
    return <div>Error fetching latest ratings.</div>
  }

  return (
    <>
      <div>
        <PageTitle title="Home" icon={<ChartLineUp size={32} />} />
      </div>
      <div>
        <Text size="sm">Latest Ratings</Text>

        <section>
          {ratings?.map((rating) => (
            <RatingCard key={rating.id} rating={rating} />
          ))}
        </section>
      </div>
    </>
  )
}

export default HomePage
