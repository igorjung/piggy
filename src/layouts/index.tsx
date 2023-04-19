import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuthContext } from '@/contexts'

import AuthLayout from './AuthLayout'
import DefaultLayout from './DefaultLayout'
import ProfileLayout from './ProfileLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { isUserLogged, isLoading } = useAuthContext()
  const router = useRouter()

  const getLayout = (path: string, children: React.ReactNode): JSX.Element => {
    if (path.includes('auth')) {
      return <AuthLayout>{children}</AuthLayout>
    } else if (path.includes('profile')) {
      return <ProfileLayout>{children}</ProfileLayout>
    }

    return <DefaultLayout>{children}</DefaultLayout>
  }

  useEffect(() => {
    if(!isLoading) {
      const isAuthRoute = router.asPath.includes('auth')

      if (isUserLogged && isAuthRoute) router.push('/home')
      else if (!isUserLogged && !isAuthRoute) router.push('/auth/signin')
    }
  }, [router, isUserLogged, isLoading])

  return <>
    <Head>
      <title>Piggy</title>
      <meta name="description" content="piggy" />
    </Head>
    {isLoading ? <p>...loading</p> : getLayout(router.asPath, children)}

  </>
}

export default Layout