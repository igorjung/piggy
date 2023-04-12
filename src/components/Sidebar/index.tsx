import { useState } from 'react'
import { useRouter } from 'next/router'
import { SvgIcon } from '@material-ui/core'
import { 
  AccountBalanceWallet,
  ArrowBackIos,
  ArrowForwardIos,
  AttachMoney,
  CreditCard,
  Dashboard,
  ExitToApp,
} from '@material-ui/icons'

import { 
  SidebarController,
  SidebarWrapper,
  SidebarHeader,
  SidebarNav,
  SidebarItem,
  SidebarFooter
} from './styles'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter()
  const navItems = [{
    id: 0,
    label: 'Dashboard',
    icon: Dashboard,
    onClick: () => router.push('/home'),
    isSelected: !!router.asPath.includes('/home'),
  }, {
    id: 1,
    label: 'New Entry',
    icon: AttachMoney,
    onClick: () => router.push('/entry'),
    isSelected: !!router.asPath.includes('/entry'),
  }]

  const onSidebarStatusChange = () => {
    setIsOpen(!isOpen);
  }

  const onLogout = () => {
    router.push('/');
  }

  return <>
    <SidebarController 
      type="button" 
      isOpen={isOpen}
      onClick={onSidebarStatusChange}
    >
      <SvgIcon component={isOpen ? ArrowBackIos : ArrowForwardIos}/>
    </SidebarController>
    <SidebarWrapper isOpen={isOpen}>
      <SidebarHeader>
        <SvgIcon component={AccountBalanceWallet}/>
        <h1>Piggy</h1>
      </SidebarHeader>
      <SidebarNav>
        {navItems.map(navItem => (
          <SidebarItem 
            key={navItem.id} 
            isSelected={navItem.isSelected}
            onClick={navItem.onClick}
          >
            <SvgIcon component={navItem.icon}/>
            <strong>{navItem.label}</strong>
          </SidebarItem>
        ))}
      </SidebarNav>
      <SidebarFooter type="button" onClick={onLogout}>
        <SvgIcon component={ExitToApp}/>
        <strong>Log out</strong>
      </SidebarFooter>
    </SidebarWrapper>
  </>
}

export default Sidebar