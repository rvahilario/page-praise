import { PageTitle } from '../components/PageTitle'
import { ChartLineUp } from '@phosphor-icons/react'

const HomePage = () => {
  return (
    <div>
      <PageTitle title="Home" icon={<ChartLineUp size={32} />} />
    </div>
  )
}

export default HomePage
