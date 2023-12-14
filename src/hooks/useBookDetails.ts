import { BookDetails } from '../@types'
import { fetchBookDetails, useQuery, UseQueryResult } from '../api'

export const useBookDetails = (
  bookId: string | undefined,
): UseQueryResult<BookDetails, Error> => {
  return useQuery(['bookDetails', bookId], () => fetchBookDetails(bookId), {
    enabled: !!bookId,
  })
}
