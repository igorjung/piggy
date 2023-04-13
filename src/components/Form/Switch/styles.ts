import styled from 'styled-components'

export const FormSwitchWrapper = styled.div`
  height: 50px;
  width: 300px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 5px;

  background-color: ${({ theme }) => theme.pink};
  border-radius: 10px;

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`

export const FormSwitchButton = styled.button<{ isActivated: boolean }>`
  height: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background-color: ${({ isActivated, theme }) => isActivated ? theme.pink : theme.white};
  color: ${({ isActivated, theme }) => isActivated ? theme.white : theme.black};
  cursor: ${({ isActivated }) => isActivated ? 'auto' : 'pointer'};
`