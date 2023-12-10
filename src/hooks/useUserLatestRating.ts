import { RatingWithAuthorAndBook } from '../@types/rating'
import { fetchUserLatestRating, useQuery, UseQueryResult } from '../api'

export const useUserLatestRating = (
  userId: string | number | undefined,
): UseQueryResult<RatingWithAuthorAndBook, Error> => {
  return useQuery(['userLatestRating', userId], fetchUserLatestRating, {
    enabled: !!userId,
  })
}
