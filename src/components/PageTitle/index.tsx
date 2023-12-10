import { ReactNode } from 'react'
import { ComponentProps } from '@stitches/react'
import { Container } from './styles'
import { Heading } from '../Typography'

type PageTitleProps = ComponentProps<typeof Container> & {
  icon: ReactNode
  title: string
}

export const PageTitle = ({ icon, title, ...props }: PageTitleProps) => {
  return (
    <Container {...props}>
      {icon}
      <Heading as="h1" size={'lg'}>
        {title}
      </Heading>
    </Container>
  )
}
