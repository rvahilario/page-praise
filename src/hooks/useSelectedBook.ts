import { useContext } from 'react'
import { SelectedBookContext } from '../contexts/SelectedBook'

export function useSelectedBook() {
  const context = useContext(SelectedBookContext)
  if (!context) {
    throw new Error('useSelectedBook must be used within a Provider')
  }
  return context
}
