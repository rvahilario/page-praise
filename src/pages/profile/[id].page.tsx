import { PageTitle } from '@/src/components/PageTitle'
import { User } from '@phosphor-icons/react'

const Profile = () => {
  return (
    <div>
      <PageTitle title="Profile" icon={<User size={32} />} />
    </div>
  )
}

export default Profile
