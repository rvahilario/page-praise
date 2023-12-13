import { Category } from '@prisma/client'
import { fetchCategories, useQuery, UseQueryResult } from '../api'

export const useCategories = (): UseQueryResult<Category[], Error> => {
  return useQuery('categories', fetchCategories)
}
