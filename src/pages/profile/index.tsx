import type { NextPage } from 'next'
import styled from 'styled-components'

import { useLanguageContext } from '@contexts'
import { 
  SectionWrapper, 
  SectionLine, 
  SectionColumn 
} from '@styles/global'
import profileData from '@/mocks/user'

const Profile: NextPage = () => {
  const { baseText } = useLanguageContext()

  return (
    <SectionWrapper>
      <h1>{baseText.titles.myProfile}</h1>
      <SectionLine>
        <SectionColumn>
          <strong>{profileData.firstName}</strong>
          <span>First name</span>
        </SectionColumn>
        <SectionColumn>
          <strong>{profileData.lastName}</strong>
          <span>Last name</span>
        </SectionColumn>
      </SectionLine>
      <SectionLine>
        <SectionColumn>
          <strong>{profileData.email}</strong>
          <span>Email</span>
        </SectionColumn>
      </SectionLine>
    </SectionWrapper>
  )
}

export default Profile
