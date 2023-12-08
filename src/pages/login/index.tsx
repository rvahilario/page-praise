import { AuthButtons, Container, Hero, LogoContainer } from './styles'

import { Button } from '@/src/components/Button'
import Image from 'next/image'
import githubLogo from '@/public/icons/github.svg'
import googleLogo from '@/public/icons/google.svg'
import rocketLogo from '@/public/icons/rocket.svg'

export default function Login() {
  return (
    <Container>
      <LogoContainer />

      <Hero>
        <h1>Welcome!</h1>
        <p>Log in or access as a guest.</p>

        <AuthButtons>
          <Button onClick={() => handleSignIn('google')}>
            <Image src={googleLogo} alt="google logo" />
            Sign in with Google
          </Button>
          <Button onClick={() => handleSignIn('github')}>
            <Image src={githubLogo} alt="github logo" />
            Sign in with GitHub
          </Button>
          <Button onClick={() => handleSignIn()}>
            <Image src={rocketLogo} alt="rocket icon" />
            Access as a guest
          </Button>
        </AuthButtons>
      </Hero>
    </Container>
  )
}
