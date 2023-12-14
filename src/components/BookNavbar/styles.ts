import { styled } from '@/src/styles'

export const NavWrapper = styled('nav', {
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 100,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',
  height: '100vh',
  maxWidth: 660,
  padding: '24px 48px',

  backgroundColor: 'DarkSlateGrey',
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
    borderRadius: '50%',

    svg: {
      fontSize: 24,
    },
  },
})

export const NavContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100%',

  '> button': {
    fontSize: '1.125rem',
    marginTop: 30,
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.1rem',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 700,
    lineHeight: '160%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      transition: '0.5s',
      backgroundColor: '$green300',
    },
  },
})
