import { useMemo } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, LoginButton, Menu, MenuItem, UserDetails } from './styles'
import { theme } from '@/src/styles'

import {
  Binoculars,
  ChartLineUp,
  SignIn,
  SignOut,
  User,
} from '@phosphor-icons/react'
import logoImage from '@/public/logo-full.svg'
import { Avatar } from '../Avatar'
import { Text } from '../Typography'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explore',
    href: '/explore',
    icon: <Binoculars size={24} />,
  },
]

export const Sidebar = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const user = session?.user

  const navItems = useMemo(() => {
    if (session) {
      return [
        ...NAV_ITEMS,
        {
          label: 'Profile',
          href: `/profile/${session?.user.id}`,
          icon: <User size={24} />,
        },
      ]
    }
    return NAV_ITEMS
  }, [session])

  return (
    <Container>
      <Image className="logo" src={logoImage} alt="Page Praise Logo" />

      <Menu>
        {navItems.map(({ href, label, icon }) => (
          <MenuItem href={href} key={label} active={router.asPath === href}>
            {icon}
            {label}
          </MenuItem>
        ))}
      </Menu>

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
            <Text as="span" size="sm">
              {user.name}
            </Text>
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
