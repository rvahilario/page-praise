import { styled } from '@/src/styles'

export const ExploreContainer = styled('section', {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const TagsWrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',
  marginTop: 40,
  marginBottom: 48,
})

export const BooksGrid = styled('div', {
  display: 'grid',
  height: '100%',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridAutoRows: 188,
  gap: '$5',
  overflowY: 'auto',
  paddingBottom: '$5',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

export const TagContainer = styled('button', {
  background: 'none',
  color: '$purple100',
  border: '1px solid $purple100',
  padding: '$1 $4',
  borderRadius: '$full',
  transition: '0.2s',

  '&:hover': {
    color: '$gray100',
    background: '$purple200',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        background: '$purple200',
        borderColor: 'purple200',
      },
    },
  },
})
