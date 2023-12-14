import { ReactNode } from 'react'
import { Heading, Text } from '../Typography'
import { DetailContainer } from './styles'

type DetailItemProps = {
  icon: ReactNode
  info: string | number
  label: string
  isInverted?: boolean
}

export const ItemDetail = ({
  icon,
  info,
  label,
  isInverted = false,
}: DetailItemProps) => {
  return (
    <DetailContainer isInverted={isInverted}>
      {icon}
      <div>
        <Heading size={'xs'} color="gray-200">
          {info}
        </Heading>
        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </DetailContainer>
  )
}
