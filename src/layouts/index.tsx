import Head from 'next/head'

import DefaultLayout from './DefaultLayout'
import AuthLayout from './AuthLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const isAuthRoute = false;

  return <>
    <Head>
      <title>Piggy</title>
      <meta name="description" content="piggy" />
    </Head>
    {isAuthRoute 
      ? <AuthLayout>{children}</AuthLayout>
      : <DefaultLayout>{children}</DefaultLayout>
    }
  </>
}

export default Layout