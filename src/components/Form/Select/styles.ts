import styled from 'styled-components'

export const FormSelect = styled.select`
  height: 40px;
  width: 310px;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.lightGray};
  background-color: ${({ theme }) => theme.white};

  padding: 5px 10px;

  &:disabled {
    background-color: ${({ theme }) => theme.darkGray};
    color: ${({ theme }) => theme.lightGray};
    cursor: not-allowed;
  }
`