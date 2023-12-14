import { X } from '@phosphor-icons/react'
import { HeaderContainer, NavContainer, NavWrapper } from './styles'

type BookNavbarProps = {
  isShow: boolean
  handleShowClose: () => void
}

export const BookNavbar = ({ isShow, handleShowClose }: BookNavbarProps) => {
  return (
    <>
      {isShow && (
        <NavWrapper transform={isShow ? 'show' : 'hidden'}>
          <HeaderContainer>
            <button onClick={handleShowClose}>
              <X size={24} />
            </button>
          </HeaderContainer>

          <NavContainer>BOOK INFO</NavContainer>
        </NavWrapper>
      )}
    </>
  )
}
