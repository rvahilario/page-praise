import { Container, ProfileDetailsWrapper, UserInfo } from './styles'
import { Heading, Text } from '../Typography'
import { Avatar } from '../Avatar'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { ProfileData } from '@/src/@types'
import { ItemDetail } from '../ItemDetail'

type ProfileDetailsProps = {
  profile: ProfileData
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <Container>
      <UserInfo>
        <Avatar
          size="lg"
          alt={profile.user.name}
          src={profile.user.avatar_url}
        />
        <Heading size="md" css={{ marginTop: 20 }}>
          {profile.user.name}
        </Heading>
        <Text size="sm" color="gray-400">
          member since {memberSinceYear}
        </Text>
      </UserInfo>

      <ProfileDetailsWrapper>
        <ItemDetail
          icon={<BookOpen />}
          info={profile.readPages}
          label="Pages Read"
        />
        <ItemDetail
          icon={<Books />}
          info={profile.ratedBooks}
          label="Reviewed Books"
        />
        <ItemDetail
          icon={<UserList />}
          info={profile.readAuthors}
          label="Read authors"
        />
        {profile?.mostReadCategory && (
          <ItemDetail
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Most read category"
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}
