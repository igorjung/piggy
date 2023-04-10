import styled from 'styled-components'

export const FormButton = styled.button`
  height: 45px;
  width: 310px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 8px;
  }

  &.primary {
    background-color: ${({ theme }) => theme.darkBlue};
  }

  &.secondary {
    background-color: ${({ theme }) => theme.pink};
  }

  &.tertiary {
    background-color: none;
    color: ${({ theme }) => theme.black};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.darkGray};
    color: ${({ theme }) => theme.lightGray};
    cursor: not-allowed;
  }
`