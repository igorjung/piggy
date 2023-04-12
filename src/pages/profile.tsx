import type { NextPage } from 'next'
import styled from 'styled-components'
import { VisibilityOff } from '@material-ui/icons'

import { Button, Input } from '@components'

const FormWrapper = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FormBody = styled.ul`
  width: 100%;
  max-width: 600px;
  height: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  gap: 16px;

  margin-top: 32px;
`

const Profile: NextPage = () => {
  return (
    <FormWrapper>
      <h1>Edit Profile</h1>
      <FormBody>
        <li>
          <Input name='name' placeholder='Name' />
        </li>
        <li>
          <Input name='lastName' placeholder='Last Name' />
        </li>
        <li>
          <Input name='email' placeholder='Email' />
        </li>
        <li>
          <Input 
            name='password' 
            placeholder='Password' 
            icon={VisibilityOff}
          />
        </li>
        <li>
          <Input 
            name='confirmPassword' 
            placeholder='Confirm Password' 
            icon={VisibilityOff}
          />
        </li>
        <li>
          <Button 
            type="button" 
            label="Submit" 
            onClick={() => console.log('new income')} 
          />
        </li>
      </FormBody>
    </FormWrapper>
  )
}

export default Profile
