import Image from 'next/image'
import { Container, Hero, LogoContainer } from './styles'
import { AuthButtons } from '@/src/components/AuthButtons'
import fullLogo from '@/public/logo-full.svg'

export default function Login() {
  return (
    <Container>
      <LogoContainer>
        <Image src={fullLogo} alt="Page praise logo." />
      </LogoContainer>

      <Hero>
        <h1>Welcome!</h1>
        <p>Log in or access as a guest.</p>

        <AuthButtons canGuest />
      </Hero>
    </Container>
  )
}

Login.getLayout = (page: JSX.Element) => {
  return page
}
