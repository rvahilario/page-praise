import { PageTitle } from '../components/PageTitle'
import { ChartLineUp } from '@phosphor-icons/react'
import { useLatestRatings } from '../hooks/useLatestRatings'

const HomePage = () => {
  const { data, isLoading, isError } = useLatestRatings()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !data) {
    return <div>Error fetching latest ratings.</div>
  }

  return (
    <>
      <div>
        <PageTitle title="Home" icon={<ChartLineUp size={32} />} />
      </div>
      <div>
        <h2>Latest Ratings</h2>
        {/* Render your data here */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export default HomePage
