import { SvgIcon } from '@material-ui/core'
import { AccountBalance } from '@material-ui/icons'

import { Sidebar } from '@components'
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutBody,
  LayoutFooter
} from './styles'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <LayoutWrapper>
      <LayoutHeader>
        <SvgIcon component={AccountBalance} />
        <h1>Piggy</h1>
      </LayoutHeader>
      <LayoutBody>{children}</LayoutBody>
      <LayoutFooter>
        <p>When you think of all the late nights, lame fights over the phone. Wake up in the morning with someone, but feeling alone</p>
      </LayoutFooter>
    </LayoutWrapper>
  )
}

export default AuthLayout