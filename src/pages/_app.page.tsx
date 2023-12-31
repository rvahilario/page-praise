import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Nunito } from 'next/font/google'
import { globalStyles } from '../styles/global'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib/react-query'
import '@smastrom/react-rating/style.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export const nunito = Nunito({ subsets: ['latin'] })
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={`${nunito.className}`}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
