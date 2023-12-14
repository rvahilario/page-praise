import { styled } from '@/src/styles'

export const Container = styled('div', {
  background: '$gray700',
  padding: '$6',
  borderRadius: 8,
})

export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> section': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  marginTop: '$6',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const TextContainer = styled('div', {
  background: '$gray800',
  border: '1px solid currentColor',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: 4,
  color: '$gray500',
  transition: '0.2s',
  padding: '12px 6px 4px 12px',

  '&:focus-within': {
    color: '$green200',
  },

  textarea: {
    flex: 1,
    // paddingLeft: "0.875rem $5",
    background: 'none',
    border: 'none',
    color: '$gray100',
    fontSize: '0.875rem',
    resize: 'none',
    minHeight: 136,

    '&::placeholder': {
      color: '$gray400',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  span: {
    color: '#7C7C8A',
    fontSize: '$xs',
    marginLeft: 'auto',
    paddingRight: 8,
    paddingBottom: 4,
  },
})
