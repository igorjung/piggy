import Link from 'next/link'
import { SvgIcon } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

import { Sidebar } from '@components'
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutBody,
  LayoutFooter
} from './styles'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <LayoutHeader>
        <Link href='/profile'>
          <SvgIcon component={AccountCircle} />
        </Link>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      <LayoutFooter>
        <small>When you think of all the late nights, lame fights over the phone. Wake up in the morning with someone, but feeling alone</small>
      </LayoutFooter>
    </LayoutWrapper>
  )
}

export default DefaultLayout