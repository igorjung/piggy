import type { NextPage } from 'next'
import styled from 'styled-components'

import { 
  Button, 
  Input, 
  Select, 
} from '@components'

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

const Entry: NextPage = () => {
  return (
    <FormWrapper>
      <h1>New Entry</h1>
      <FormBody>
        <li>
          <Input name='name' placeholder='Name' />
        </li>
        <li>
          <Select 
            name='type' 
            placeholder='type' 
            options={[{
              id: 0,
              label: 'Income'
            }, {
              id: 1,
              label: 'Outcome'
            }]}
          />
        </li>
        <li>
          <Input name='date' placeholder='Date' />
        </li>
        <li>
          <Input name='value' placeholder='Value' />
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

export default Entry
