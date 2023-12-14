import { styled } from '@/src/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  '& button': {
    height: '4.5rem',
  },
})
