/* eslint-disable prettier/prettier */
import { Book, CategoriesOnBooks, Category, Rating, User } from '@prisma/client'

export type RatingWithUser = Rating & {
  user: User
}

export type RatingWithBook = Rating & {
  book: Book
}

export type RatingWithUserAndBook = Rating &
  RatingWithBook & {
    user: User
  }

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead?: boolean
}

export type BookDetails = BookWithAvgRating & {
  ratings: RatingWithUser[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks & {
      category: Category
    }[]
  }
}

export type ProfileData = {
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  ratings: ProfileRating[]
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}
