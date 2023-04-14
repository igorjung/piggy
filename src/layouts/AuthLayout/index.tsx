import { SvgIcon } from '@material-ui/core'
import { AccountBalance } from '@material-ui/icons'

import { useLanguageContext } from '@contexts'

import {
  LayoutWrapper,
  LayoutOutdoor,
  LayoutContent,
  LayoutHeader,
  LayoutBody,
  LayoutFooter
} from './styles'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { baseText } = useLanguageContext()

  return (
    <LayoutWrapper>
      <LayoutContent>
        <LayoutHeader>
          <SvgIcon component={AccountBalance} />
          <h1>Piggy</h1>
        </LayoutHeader>
        <LayoutBody>{children}</LayoutBody>
        <LayoutFooter>
          <p>{baseText.layout.footer}</p>
        </LayoutFooter>
      </LayoutContent>
      <LayoutOutdoor />
    </LayoutWrapper>
  )
}

export default AuthLayout