import { styled } from '../styles'

export const Text = styled('p', {
  lineHeight: '$base',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      xl: {
        fontSize: '$xl',
      },
    },

    color: {
      'gray-100': {
        color: '$gray100',
      },
      'gray-200': {
        color: '$gray200',
      },
      'gray-300': {
        color: '$gray300',
      },
      'gray-400': {
        color: '$gray400',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'gray-100',
  },
})

export const Heading = styled('h2', {
  fontWeight: '$bold',
  lineHeight: '$short',

  variants: {
    size: {
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
      xl: {
        fontSize: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
      },
    },

    color: {
      'gray-100': {
        color: '$gray100',
      },
      'gray-200': {
        color: '$gray200',
      },
      'gray-300': {
        color: '$gray300',
      },
      'gray-400': {
        color: '$gray400',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
    color: 'gray-100',
  },
})
