import { styled } from '@/src/styles'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 40,

  '> header': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '$4',

    '> button': {
      cursor: 'pointer',
    },
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})

export const UserRatingContainer = styled('div', {
  padding: '$6',
  borderRadius: 8,
  variants: {
    isOwner: {
      false: {
        background: '$gray700',
      },
      true: {
        background: '$gray600',
      },
    },
  },
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  marginBottom: '$3',

  '> section': {
    display: 'flex',
    gap: '$4',
  },
})
