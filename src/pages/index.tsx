import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { DeleteForeverRounded } from '@material-ui/icons'

import { Button, Input } from '@components'

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  padding: 64px 32px 64px 32px;
`

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
  return (
    <>
      <Head>
        <title>Piggy</title>
        <meta name="description" content="piggy" />
      </Head>
      <Wrapper>
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
            <Input />
          </Column>
        </Line>
      </Wrapper>
    </>
  )
}

export default Home
