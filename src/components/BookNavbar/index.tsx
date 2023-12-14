import { X } from '@phosphor-icons/react'
import { HeaderContainer, NavContainer, NavWrapper } from './styles'
import { BookInfo } from './BookInfo'

import { MOCK_BOOK } from '@/mocks'
import { BookRatings } from './BookRatings'

type BookNavbarProps = {
  isShow: boolean
  handleShowClose: () => void
}

export const BookNavbar = ({ isShow, handleShowClose }: BookNavbarProps) => {
  const book = MOCK_BOOK // TODO: replace with useSelectedBook

  return (
    <>
      {isShow && (
        <NavWrapper transform={isShow ? 'show' : 'hidden'}>
          <HeaderContainer>
            <button onClick={handleShowClose}>
              <X size={24} />
            </button>
          </HeaderContainer>

          <NavContainer>
            <BookInfo book={book} />
            <BookRatings ratings={book.ratings} />
          </NavContainer>
        </NavWrapper>
      )}
    </>
  )
}
