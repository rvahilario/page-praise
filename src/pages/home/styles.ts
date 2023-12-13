import { styled } from '@/src/styles'

export const BooksSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$4',
})

export const Container = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 40,
  overflow: 'hidden',
})

export const GridContainer = styled('section', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: '1fr 308px',
  gap: 64,

  '> div': {
    overflow: 'auto',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
})

export const LatestContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,
})

export const SectionHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$4',
  marginBottom: '$4',
})
