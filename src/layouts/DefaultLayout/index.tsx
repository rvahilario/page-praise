import { ReactNode } from 'react'
import Head from 'next/head'
import { Container, Content } from './styles'
import { Sidebar } from '@/src/components/Sidebar'

type DefaultLayoutProps = {
  children: ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>Page Praise</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <Sidebar />
      <Content>{children}</Content>
    </Container>
  )
}
