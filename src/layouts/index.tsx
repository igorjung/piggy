import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState  } from 'react'

import { useAuthContext } from '@/contexts'

import DefaultLayout from './DefaultLayout'
import AuthLayout from './AuthLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isAuthRoute, setItAuthRoute] = useState(false)
  const { isUserLogged } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    const isAuth = router.asPath.includes('auth')

    if (isUserLogged && isAuth) router.push('/home')
    else if (!isUserLogged && !isAuth) router.push('/auth/signin')

    setItAuthRoute(isAuth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, isUserLogged])

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