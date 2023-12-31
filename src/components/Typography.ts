import { styled } from '../styles'

export const Text = styled('p', {
  lineHeight: '$base',
  fontFamily: '$default',

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
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
  fontStyle: 'normal',
  lineHeight: '$short',
  fontFamily: '$default',

  variants: {
    size: {
      xs: {
        fontSize: '$md',
      },
      sm: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$xl',
      },
      lg: {
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
