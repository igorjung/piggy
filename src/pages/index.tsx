import { useState } from 'react';
import type { NextPage } from 'next'
import styled from 'styled-components'
import { DeleteForeverRounded } from '@material-ui/icons'

import { 
  Button, 
  Input, 
  Select, 
  Switch, 
  Alert, 
  Modal,
  Table,
} from '@components'
import { BalanceTableModel } from '@/models';

const Title = styled.h1`
  width: 100%;

  margin: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
`

const Line = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const Column = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 16px;
`

const Home: NextPage = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data: BalanceTableModel = {
    year: '2023',
    months: [{
      date: '01/01/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '02/02/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '03/03/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '01/04/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '05/05/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '06/06/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '07/07/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '08/08/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '09/09/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '10/10/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '11/11/2023',
      entriesId: [0, 1, 2],
    }, {
      date: '12/12/2023',
      entriesId: [0, 1, 2],
    }],
    entries: [{
      id: 0,
      name: 'Skincare',
      value: 200,
      type: 0
    }, {
      id: 1,
      name: 'Salary',
      value: 4800,
      type: 1
    }, {
      id: 2,
      name: 'Outfits',
      value: 500,
      type: 0
    }]
  }

  return (
    <>
      <Alert 
        description="Are you sure that you want to delete this item?"
        actions={[{
          id: 0,
          label: 'CANCEL',
          class: 'primary',
          onClick: () => {
            console.log('cancel button clicked')
            setIsAlertVisible(false)
          }
        }, {
          id: 1,
          label: 'DELETE',
          class: 'secondary',
          onClick: () => {
            console.log('delete button clicked')
            setIsAlertVisible(false)
          }
        }]}
        onClose={() => setIsAlertVisible(false)}
        isOpen={isAlertVisible}
      />
      <Modal 
        title="Test Modal"
        onClose={() => setIsModalVisible(false)}
        isOpen={isModalVisible}
      >
        <li><Input /></li>
        <li><Input /></li>
      </Modal>
      <Title>Buttons:</Title>
      <Line>
        <Column>
          <Button 
            label="CONFIRM" 
            disabled={true}
            onClick={(event) => console.log('primary button event:', event)} 
          />
        </Column>
        <Column>
          <Button 
            className='secondary'
            label="CANCEL" 
            onClick={(event) => console.log('secondary button event:', event)} 
          />
        </Column>
        <Column>
          <Button 
            className='tertiary'
            label="Delete" 
            icon={DeleteForeverRounded}
            onClick={(event) => console.log('tertiary button event:', event)} 
          />
        </Column>
      </Line>
      <Title>Inputs:</Title>
      <Line>
        <Column>
          <Input 
            type="text" 
            placeholder='Name'
          />
        </Column>
        <Column>
          <Input 
            type="text" 
            icon={DeleteForeverRounded}
            onIconClick={(event) => console.log('input icon click event: ', event)}
            placeholder='Password'
          />
        </Column>
        <Column>
          <Input 
            disabled
            type="text" 
            placeholder='Name'
          />
        </Column>
      </Line>
      <Title>Selects:</Title>
      <Line>
        <Column>
          <Select 
            placeholder='Type' 
            options={[{
              id: 1,
              label: 'Income'
            }, {
              id: 2,
              label: 'Outcome'
            }]}
          />
        </Column>
      </Line>
      <Title>Switchs:</Title>
      <Line>
        <Column>
          <Switch 
            options={[{
              id: 1,
              label: 'Sign in',
              onClick: () => {console.log('sign in switch button clicked')},
              isActivated: true,
            }, {
              id: 2,
              label: 'Sign up',
              onClick: () => {console.log('sign up switch button clicked')},
            }]}
          />
        </Column>
      </Line>
      <Title>Alert and Modals:</Title>
      <Line>
        <Column>
          <Button 
            className='primary'
            label="OPEN ALERT" 
            onClick={() => setIsAlertVisible(true)} 
          />
        </Column>
        <Column>
          <Button 
            className='primary'
            label="OPEN MODAL" 
            onClick={() => setIsModalVisible(true)} 
          />
        </Column>
      </Line>
      <Title>Table: </Title>
      <Table data={data}/>
    </>
  )
}

export default Home
