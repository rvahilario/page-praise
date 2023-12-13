import { styled } from '@/src/styles'
import Image from 'next/image'

export const Container = styled('div', {
  width: '100%',
  borderRadius: 8,
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  position: 'relative',

  variants: {
    isCompact: {
      false: {
        padding: '$6',
      },
      true: {
        padding: '$4 $5',
      },
    },
  },
})

export const BookDetails = styled('div', {
  display: 'flex',
  gap: '$5',
  maxHeight: '100%',
  img: {
    borderRadius: 4,
  },
})

export const BookImage = styled(Image, {
  objectFit: 'cover',
  transition: '0.2s',

  '&:hover': {
    filter: 'brightness(1.2)',
  },
})

export const BookContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  padding: '$1 0',
  justifyContent: 'space-between',

  '> div > h2': {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    maxHeight: '44px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 2,
  },
})

export const BookSummary = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '$6',
})

export const ToggleShowMoreButton = styled('button', {
  background: 'none',
  border: 'none',
  fontSize: '0.875rem',
  color: '$purple100',
  fontWeight: '$bold',
  marginLeft: '$1',
  cursor: 'pointer',
})

export const ReadBadge = styled('span', {
  position: 'absolute',
  display: 'block',
  background: '$green300',
  top: 0,
  right: 0,
  color: '$green100',
  fontWeight: '$bold',
  fontSize: '$xs',
  padding: '$1 $3',
  borderRadius: '0px 4px 0px 4px',
})
