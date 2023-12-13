import { api } from '@/src/lib/axios'

// queryHooks.ts
import {
  useQuery as _useQuery,
  UseQueryResult as _UseQueryResult,
} from 'react-query'

export const useQuery = _useQuery
export type UseQueryResult<TData, TError> = _UseQueryResult<TData, TError>

export const fetchLatestRatings = async () => {
  try {
    const { data } = await api.get('/ratings/latest')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch latest ratings: ${error}`)
  }
}

export const fetchUserLatestRating = async () => {
  try {
    const { data } = await api.get('/ratings/user-latest')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch latest ratings: ${error}`)
  }
}

export const fetchBooks = async (categoryFilter: string) => {
  try {
    const { data } = await api.get('/books', {
      params: {
        category: categoryFilter || null,
      },
    })
    return data
  } catch (error) {
    throw new Error(`Failed to fetch books: ${error}`)
  }
}

export const fetchPopularBooks = async () => {
  try {
    const { data } = await api.get('/books/popular')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch popular books: ${error}`)
  }
}

export const fetchCategories = async () => {
  try {
    const { data } = await api.get('/books/categories')
    return data
  } catch (error) {
    throw new Error(`Failed to fetch categories: ${error}`)
  }
}

export const fetchProfileData = async (userId: string) => {
  try {
    const { data } = await api.get(`/profile/${userId}`)
    return data
  } catch (error) {
    throw new Error(`Failed to fetch profile data: ${error}`)
  }
}
