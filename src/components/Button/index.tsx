import { styled } from '@/src/styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  height: 72,
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '$5 $6',
  color: '$gray200',
  background: '$gray600',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$5',

  cursor: 'pointer',

  svg: {
    width: '$8',
    height: '$8',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray200',
  },

  '&:not(:disabled):hover': {
    background: '$gray700',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}
