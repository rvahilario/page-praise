import { RatingWithAuthorAndBook } from '../@types/rating'
import { fetchLatestRatings, useQuery, UseQueryResult } from '../api'

export const useLatestRatings = (): UseQueryResult<
  RatingWithAuthorAndBook[],
  Error
> => {
  return useQuery('latestRatings', fetchLatestRatings)
}
