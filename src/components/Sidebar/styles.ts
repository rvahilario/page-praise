import { styled } from '@/src/styles'
import Link from 'next/link'

export const Container = styled('aside', {
  width: 234,
  height: 'calc(100% - 40px)',
  margin: 20,
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  backgroundSize: 'cover',
  borderRadius: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: 40,
  paddingBottom: 24,

  '.logo': {
    width: 128,
    marginBottom: 64,
  },
})

export const LoginButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontWeight: 700,
  fontSize: '$md',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    cursor: 'pointer',
  },

  p: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
})

export const Menu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  height: '100%',
  width: 128,
})

export const MenuItem = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  color: '$gray400',
  transition: '0.2s',

  svg: {
    marginRight: '$3',
  },

  '&:hover': {
    color: '$gray100',
  },

  '&::before': {
    content: '',
    width: 4,
    height: 24,
    background: '$gradient-vertical',
    marginRight: '$4',
    borderRadius: '$full',
    transition: '0.2s',
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',

        '&::before': {
          opacity: 1,
        },
      },
    },
  },
})
