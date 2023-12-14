import { Book } from '@prisma/client'
import { ReactNode, createContext, useState } from 'react'
import { BookNavbar } from '../components/BookNavbar'

type SelectedBookContext = {
  selectedBook: any | null
  clearSelectedBook: () => void
  selectBook: (book: any) => void
  handleShowBookNavbar: () => void
}

export const SelectedBookContext = createContext<SelectedBookContext | null>(
  null,
)

export const SelectedBookProvider = ({ children }: { children: ReactNode }) => {
  const [showBookNav, setShowBookNav] = useState(false)

  function handleShowBookNavbar() {
    setShowBookNav(!showBookNav)
  }

  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  function selectBook(book: Book) {
    setSelectedBook(book)
  }

  function clearSelectedBook() {
    setSelectedBook(null)
  }

  return (
    <SelectedBookContext.Provider
      value={{
        clearSelectedBook,
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
