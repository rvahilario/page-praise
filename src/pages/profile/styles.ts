import { styled } from '@/src/styles'

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  maxHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  paddingBottom: 25,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const RatingsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})

export const GridContainer = styled('section', {
  display: 'grid',
  height: 'calc(100% - 155px)',
  gridTemplateColumns: '1fr 308px',
  gap: 64,

  '> div': {
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  height: 155,
})
