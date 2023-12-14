import { styled } from '@/src/styles'

export const DetailContainer = styled('div', {
  display: 'flex',
  gap: '$5',

  svg: {
    width: 32,
    height: 32,
    color: '$green100',
  },

  variants: {
    isInverted: {
      true: {
        '> div': {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
      },
      false: {
        '> div': {
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
  },
})
