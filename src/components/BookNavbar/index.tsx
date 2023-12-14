import { X } from '@phosphor-icons/react'
import { HeaderContainer, NavContainer, NavWrapper } from './styles'
import { BookInfo } from './BookInfo'

import { BookRatings } from './BookRatings'
import { useSelectedBook } from '@/src/hooks/useSelectedBook'
import { useBookDetails } from '@/src/hooks/useBookDetails'

type BookNavbarProps = {
  isShow: boolean
  handleShowClose: () => void
}

export const BookNavbar = ({ isShow, handleShowClose }: BookNavbarProps) => {
  const { selectedBook } = useSelectedBook()
  const { data: book, isLoading } = useBookDetails(selectedBook?.id)

  return (
    <>
      {isShow && (
        <NavWrapper transform={isShow ? 'show' : 'hidden'}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            book && (
              <>
                <HeaderContainer>
                  <button onClick={handleShowClose}>
                    <X size={24} />
                  </button>
                </HeaderContainer>
                <NavContainer>
                  <BookInfo book={book} />
                  <BookRatings bookId={book.id} ratings={book.ratings} />
                </NavContainer>
              </>
            )
          )}
        </NavWrapper>
      )}
    </>
  )
}
