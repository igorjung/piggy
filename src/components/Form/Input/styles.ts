import styled from 'styled-components'

export const FormInputWrapper = styled.div<{ isInvalid?: boolean }>`
  height: 40px;
  width: 300px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 10px;
  border: 2px solid ${({ isInvalid, theme }) => isInvalid ? theme.red : theme.lightGray};
  background-color: ${({ theme }) => theme.white};
  margin-bottom: 16px;

  input {
    width: 100%;
    height: 100%;

    padding: 5px 10px;
    font-size: 14px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-right: 10px;
    cursor: pointer;

    svg {
      font-size: 18px;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.darkGray};
    color: ${({ theme }) => theme.lightGray};
    cursor: not-allowed;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`

export const FormInputSpan = styled.span`
  position: absolute;
  top: 40px;
  left: 8px;

  color: ${({ theme }) => theme.red};
`