import Link from 'next/link'
import { useRouter } from 'next/router'
import { SvgIcon } from '@material-ui/core'
import { 
  ArrowBack, 
  Edit, 
  Lock, 
  DeleteForever, 
  Person
} from '@material-ui/icons'

import { useLanguageContext } from '@/contexts'

import {
  LayoutWrapper,
  LayoutHeader,
  LayoutContent,
  LayoutSidebar,
  LayoutSidebarItem,
  LayoutBody,
  LayoutMobileMenu,
  LayoutMobileMenuItem,
  LayoutFooter
} from './styles'

interface ProfileLayoutProps {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const { baseText } = useLanguageContext()
  const router = useRouter()

  const profileOptions = [{
    id: 0,
    label: baseText.layout.profile.myProfile,
    icon: Person,
    path: '/profile'
  },{
    id: 1,
    label: baseText.layout.profile.edit,
    icon: Edit,
    path: '/profile/edit'
  }, {
    id: 2,
    label: baseText.layout.profile.newPassword,
    icon: Lock,
    path: '/profile/new-password'
  }, {
    id: 3,
    label: baseText.layout.profile.delete,
    icon: DeleteForever,
    path: '/profile/delete'
  }]

  return (
    <LayoutWrapper>
      <LayoutHeader>
        <Link href='/home'>
          <SvgIcon component={ArrowBack} />
        </Link>
      </LayoutHeader>
      <LayoutContent>
        <LayoutSidebar>
          {profileOptions.map(item => (
            <LayoutSidebarItem 
              key={item.id} 
              isSelected={router.asPath === item.path}
              onClick={() => router.push(item.path)}
            >
              <SvgIcon component={item.icon}/>
              <strong>{item.label}</strong>
            </LayoutSidebarItem>
          ))}
        </LayoutSidebar>
        <LayoutBody>{children}</LayoutBody>
        <LayoutMobileMenu>
          {profileOptions.map(item => (
            <LayoutMobileMenuItem 
              key={item.id} 
              isSelected={router.asPath === item.path}
              onClick={() => router.push(item.path)}
            >
              <SvgIcon component={item.icon}/>
            </LayoutMobileMenuItem>
          ))}
        </LayoutMobileMenu>
      </LayoutContent>
      <LayoutFooter>
        <small>{baseText.layout.footer}</small>
      </LayoutFooter>
    </LayoutWrapper>
  )
}

export default ProfileLayout