import { useSession } from 'next-auth/react'

const HomePage = () => {
  const { data } = useSession()
  return (
    <div>
      HomePage
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default HomePage
