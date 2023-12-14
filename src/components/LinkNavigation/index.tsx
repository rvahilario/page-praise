import { ComponentProps } from '@stitches/react'
import { Container } from './styles'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

type LinkProps = Omit<ComponentProps<typeof Container>, 'href'> & {
  text: string
  href?: string
  onClick?: () => void
  withoutIcon?: boolean
}

export const LinkNavigation = ({
  text,
  href,
  onClick,
  withoutIcon,
  iconSide = 'right',
  ...props
}: LinkProps) => {
  return (
    <Container
      {...props}
      href={href || ''}
      as={onClick ? 'button' : undefined}
      iconSide={iconSide}
      onClick={onClick}
    >
      {text}
      {!withoutIcon && (iconSide === 'right' ? <CaretRight /> : <CaretLeft />)}
    </Container>
  )
}
