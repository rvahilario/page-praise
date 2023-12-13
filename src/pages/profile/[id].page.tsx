/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PageTitle } from '@/src/components/PageTitle'
import { MagnifyingGlass, User } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useProfileData } from '@/src/hooks/useProfileData'
import { LinkNavigation } from '@/src/components/LinkNavigation'
import {
  Container,
  GridContainer,
  HeaderContainer,
  RatingsList,
} from './styles'
import { BookCardColumn } from '@/src/components/BookCardColumn'
import { SearchInput } from '@/src/components/SearchInput'
import { useState } from 'react'
import { Text } from '@/src/components/Typography'
import { ProfileDetails } from '@/src/components/ProfileDetails'

const Profile = () => {
  const router = useRouter()
  const userId = router.query.id as string
  const { data: session } = useSession()
  const { data: profile } = useProfileData(userId)
  const [search, setSearch] = useState('')

  const ratings = profile?.ratings || []
  const isOwnProfile = session?.user?.id === userId

  const filteredRatings = ratings?.filter((rating) => {
    return rating.book.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <HeaderContainer>
        {isOwnProfile ? (
          <PageTitle title="Perfil" icon={<User size={25} />} />
        ) : (
          <LinkNavigation
            href="/"
            text="Back"
            iconSide="left"
            color="white"
            css={{ alignSelf: 'flex-start' }}
          />
        )}
        <SearchInput
          placeholder="Search rated book"
          icon={<MagnifyingGlass size={20} />}
          css={{ marginTop: isOwnProfile ? 0 : 40, marginBottom: 32 }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </HeaderContainer>

      <GridContainer>
        <RatingsList>
          {filteredRatings?.map((rating) => {
            const book = {
              ...rating.book,
              avgRating: rating.rate,
            }
            return <BookCardColumn key={rating.id} book={book} />
          })}
          {filteredRatings && filteredRatings.length <= 0 && (
            <Text color="gray-400" css={{ textAlign: 'center' }}>
              {search ? 'No results found' : 'No reviews found'}
            </Text>
          )}
        </RatingsList>

        {profile && <ProfileDetails profile={profile} />}
      </GridContainer>
    </Container>
  )
}

export default Profile
