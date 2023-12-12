import { Book, Rating, User } from '@prisma/client'

export type RatingWithBook = Rating & {
  book: Book
}

export type RatingWithUserAndBook = Rating &
  RatingWithBook & {
    user: User
  }

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyReady: boolean
}
