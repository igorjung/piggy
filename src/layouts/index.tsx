import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState  } from 'react'

import DefaultLayout from './DefaultLayout'
import AuthLayout from './AuthLayout'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isAuthRoute, setItAuthRoute] = useState(false)

  const router = useRouter()
  const authRoutes = [
    '/',
    '/login',
    '/signup'
  ]

  useEffect(() => {
    const userToken = localStorage.getItem('token')
    const isAuth = authRoutes.find(route => route.includes(router.asPath))

    if (userToken && isAuth) {
      console.log('user logged in wrong page')
      // router.push('/home')
    } else if (!userToken && !isAuth) {
      console.log('user not logged in wrong page')
      // router.push('/')
    }

    setItAuthRoute(!!isAuth)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

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