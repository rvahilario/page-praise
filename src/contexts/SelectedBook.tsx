import { ReactNode, createContext, useState } from 'react'
import { BookNavbar } from '../components/BookNavbar'
import { BookWithAvgRating } from '../@types'

type SelectedBookContext = {
  selectedBook: BookWithAvgRating | null
  selectBook: (book: BookWithAvgRating) => void
  handleShowBookNavbar: () => void
}

export const SelectedBookContext = createContext<SelectedBookContext | null>(
  null,
)

export const SelectedBookProvider = ({ children }: { children: ReactNode }) => {
  const [showBookNav, setShowBookNav] = useState(false)
  const [selectedBook, setSelectedBook] = useState<BookWithAvgRating | null>(
    null,
  )

  function handleShowBookNavbar() {
    if (showBookNav) clearSelectedBook()
    setShowBookNav(!showBookNav)
  }

  function selectBook(book: BookWithAvgRating) {
    setSelectedBook(book)
  }

  function clearSelectedBook() {
    setSelectedBook(null)
  }

  return (
    <SelectedBookContext.Provider
      value={{
        selectBook,
        selectedBook,
        handleShowBookNavbar,
      }}
    >
      {children}
      <BookNavbar isShow={showBookNav} handleShowClose={handleShowBookNavbar} />
    </SelectedBookContext.Provider>
  )
}
