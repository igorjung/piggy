import styled from 'styled-components'

export const FormInputWrapper = styled.div`
  height: 40px;
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.lightGray};
  background-color: ${({ theme }) => theme.white};

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