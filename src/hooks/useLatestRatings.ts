import { RatingWithUserAndBook } from '../@types'
import { fetchLatestRatings, useQuery, UseQueryResult } from '../api'

export const useLatestRatings = (): UseQueryResult<
  RatingWithUserAndBook[],
  Error
> => {
  return useQuery('latestRatings', fetchLatestRatings)
}
