import { styled } from '@/src/styles'

export const NavWrapper = styled('nav', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 100,
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  height: '100vh',
  maxWidth: 660,
  padding: '24px 48px',

  backgroundColor: '$gray800',
  transition: '.5s',

  variants: {
    transform: {
      hidden: {
        transform: 'translateX(110%)',
      },
      show: {
        transform: 'translateX(0%)',
      },
    },
  },
})

export const HeaderContainer = styled('header', {
  width: '100%',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '$4',

  button: {
    color: '$gray400',
    lineHeight: 0,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    borderRadius: 4,

    '&:hover': {
      background: '$gray600',
    },
    svg: {
      fontSize: 24,
    },
  },
})

export const NavContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
})
