import { Book, Rating, User } from '@prisma/client'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}
