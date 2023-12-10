import { ComponentProps } from 'react'
import { AvatarImage, Container } from './styles'
import { User } from '@phosphor-icons/react'
import { theme } from '@/src/styles'

type AvatarProps = ComponentProps<typeof Container> & {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt?: string
}

export const Avatar = ({
  src,
  size = 'md',
  alt = '',
  ...props
}: AvatarProps) => {
  return (
    <Container size={size} {...props}>
      {src ? (
        <AvatarImage src={src} width={80} height={80} alt={alt} />
      ) : (
        <User weight="bold" color={`${theme.colors.gray700}`} />
      )}
    </Container>
  )
}
