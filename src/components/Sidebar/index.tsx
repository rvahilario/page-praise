import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Container, LoginButton, UserDetails } from './styles'
import { theme } from '@/src/styles'

import { SignIn, SignOut } from '@phosphor-icons/react'
import logoImage from '@/public/logo-full.svg'
import { Avatar } from '../Avatar'

export const Sidebar = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <Container>
      <div>
        <Image className="logo" src={logoImage} alt="Page Praise Logo" />
      </div>
      <footer>
        {!user ? (
          <div>
            <LoginButton href={'/login'}>
              Sign In
              <SignIn size={24} />
            </LoginButton>
          </div>
        ) : (
          <UserDetails>
            <Avatar src={user.avatar_url || ''} />
            <SignOut
              color={`${theme.colors.danger}`}
              size={20}
              onClick={() => signOut()}
            />
          </UserDetails>
        )}
      </footer>
    </Container>
  )
}
