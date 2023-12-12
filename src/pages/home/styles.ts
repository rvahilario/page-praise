import { styled } from '@/src/styles'

export const RatingsSection = styled('section', {
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
  overflow: 'auto',
  paddingBottom: 40,

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const LatestContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$4',
    marginBottom: '$4',
  },
})