import { useSession } from 'next-auth/react'
import {
  ActionsContainer,
  Container,
  FormContainer,
  TextContainer,
  UserDetails,
} from './styles'
import { FormEvent, TextareaHTMLAttributes, useState } from 'react'
import { Check, X } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from 'react-query'
import { api } from '@/src/lib/axios'
import { Avatar } from '../../Avatar'
import { Heading } from '../../Typography'
import { RatingStars } from '../../RatingStars'
import { IconButton } from '../../Button'
import { theme } from '@/src/styles'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ onCancel, bookId }: RatingFormProps) => {
  const { data: session } = useSession()

  const user = session?.user

  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const submitDisabled = !description.trim() || !currentRate

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation(
    async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['book', bookId])
        queryClient.invalidateQueries(['books'])
        onCancel()
      },
    },
  )

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submitDisabled) return
    await handleRate()
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url!} />
            <Heading size="xs">{user.name}</Heading>
          </section>
          <RatingStars
            value={currentRate}
            onChange={setCurrentRate}
            readOnly={false}
          />
        </UserDetails>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <TextArea
          placeholder="Write your review"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <IconButton type="button" onClick={onCancel}>
            <X color={`${theme.colors.purple100}`} />
          </IconButton>
          <IconButton type="submit" disabled={submitDisabled}>
            <Check color={`${theme.colors.green100}`} />
          </IconButton>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  maxLength?: number
}

export const TextArea = ({ maxLength, ...props }: TextAreaProps) => {
  const valueLength = String(props.value)?.length ?? 0
  return (
    <TextContainer>
      <textarea {...props} maxLength={maxLength} />
      {maxLength && (
        <span>
          {valueLength}/{maxLength}
        </span>
      )}
    </TextContainer>
  )
}
