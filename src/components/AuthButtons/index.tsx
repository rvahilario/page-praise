import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { Container } from './styles'
import { Button } from '../Button'
import Image from 'next/image'

import githubLogo from '@/public/icons/github.svg'
import googleLogo from '@/public/icons/google.svg'
import rocketLogo from '@/public/icons/rocket.svg'

type AuthButtonsProps = {
  callbackUrl?: string
  canGuest?: boolean
}

export const AuthButtons = ({
  callbackUrl = '/',
  canGuest,
}: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push(callbackUrl)
      return
    }
    signIn(provider, {
      callbackUrl,
    })
  }

  return (
    <Container>
      <Button onClick={() => handleSignIn('google')}>
        <Image src={googleLogo} alt="google logo" />
        Sign in with Google
      </Button>
      <Button onClick={() => handleSignIn('github')}>
        <Image src={githubLogo} alt="github logo" />
        Sign in with GitHub
      </Button>
      {canGuest && (
        <Button onClick={() => handleSignIn()}>
          <Image src={rocketLogo} alt="rocket icon" />
          Access as a guest
        </Button>
      )}
    </Container>
  )
}
