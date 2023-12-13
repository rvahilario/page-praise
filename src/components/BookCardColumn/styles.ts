import { styled } from '@/src/styles'
import Image from 'next/image'

export const Container = styled('div', {
  width: '100%',
  borderRadius: 8,
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',

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
  img: {
    borderRadius: 4,
  },

  variants: {
    isCompact: {
      false: {
        '> a': {
          maxHeight: 152,
        },
      },
      true: {
        '> a': {
          maxHeight: 94,
        },
      },
    },
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