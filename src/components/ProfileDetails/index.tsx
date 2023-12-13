import { ReactNode } from 'react'
import {
  Container,
  DetailContainer,
  ProfileDetailsWrapper,
  UserInfo,
} from './styles'
import { Heading, Text } from '../Typography'
import { Avatar } from '../Avatar'
import {
  BookOpen,
  BookmarkSimple,
  Books,
  UserList,
} from '@phosphor-icons/react'
import { ProfileData } from '@/src/@types'

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
        <DetailItem
          icon={<BookOpen />}
          info={profile.readPages}
          label="Pages Read"
        />
        <DetailItem
          icon={<Books />}
          info={profile.ratedBooks}
          label="Reviewed Books"
        />
        <DetailItem
          icon={<UserList />}
          info={profile.readAuthors}
          label="Read authors"
        />
        {profile?.mostReadCategory && (
          <DetailItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label="Most read category"
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}

type DetailItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

const DetailItem = ({ icon, info, label }: DetailItemProps) => {
  return (
    <DetailContainer>
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
