import { BookWithAvgRating } from '../@types'
import { fetchPopularBooks, useQuery, UseQueryResult } from '../api'

export const usePopularBooks = (): UseQueryResult<
  BookWithAvgRating[],
  Error
> => {
  return useQuery('popularBooks', fetchPopularBooks)
}
