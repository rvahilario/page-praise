import { RatingWithUserAndBook } from '../@types'
import { fetchUserLatestRating, useQuery, UseQueryResult } from '../api'

export const useUserLatestRating = (
  userId: string | number | undefined,
): UseQueryResult<RatingWithUserAndBook, Error> => {
  return useQuery(['userLatestRating', userId], fetchUserLatestRating, {
    enabled: !!userId,
  })
}
