import { BookWithAvgRating } from '../@types'
import { fetchBooks, useQuery, UseQueryResult } from '../api'

export const useBooks = (
  categoryFilter: string,
): UseQueryResult<BookWithAvgRating[], Error> => {
  return useQuery(['books', categoryFilter], () => fetchBooks(categoryFilter))
}
