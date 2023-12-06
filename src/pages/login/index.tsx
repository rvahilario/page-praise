import { AuthButtons, Container, Hero, LogoContainer } from './styles'

import { Button } from '@/src/components/Button'

export default function Login() {
  return (
    <Container>
      <LogoContainer />

      <Hero>
        <h1>Welcome!</h1>
        <p>Log in or access as a guest.</p>

        <AuthButtons>
          <Button>Sign in with Google</Button>
          <Button>Sign in with GitHub</Button>
          <Button>Access as a guest</Button>
        </AuthButtons>
      </Hero>
    </Container>
  )
}
