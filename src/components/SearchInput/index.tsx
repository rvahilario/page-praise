import { InputHTMLAttributes, ReactNode } from 'react'
import { InputContainer } from './styles'
import { CSS } from '@stitches/react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
  css?: CSS
}

export const SearchInput = ({ icon, css, ...props }: InputProps) => {
  return (
    <InputContainer css={css}>
      <input {...props} />
      {icon}
    </InputContainer>
  )
}
