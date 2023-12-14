import { styled } from '@/src/styles'
import Image from 'next/image'

export const BookDetailsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  padding: '$6 $8',
  borderRadius: '$md',
})

export const BookDetailsContainer = styled('div', {
  display: 'flex',
  gap: '$8',
})

export const BookImage = styled(Image, {
  borderRadius: '$md',
  objectFit: 'cover',
  minWidth: 171,
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookInfos = styled('div', {
  marginTop: 40,
  paddingTop: 24,
  borderTop: '1px solid $gray600',
  display: 'flex',
  gap: 60,
})
