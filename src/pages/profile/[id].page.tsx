import { PageTitle } from '@/src/components/PageTitle'
import { User } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useProfileData } from '@/src/hooks/useProfileData'

const Profile = () => {
  const router = useRouter()
  const userId = router.query.id as string
  const { data: session } = useSession()
  const { data: profile } = useProfileData(userId)
  const isOwnProfile = session?.user?.id === userId
  console.log('profile', profile)
  console.log('isOwnProfile', isOwnProfile)

  return (
    <div>
      <PageTitle title="Profile" icon={<User size={32} />} />
    </div>
  )
}

export default Profile
