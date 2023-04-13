import styled from 'styled-components'

export const FormButton = styled.button<{ iconColor?: string }>`
  height: 40px;
  width: 100%;
  max-width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  padding: 5px 32px;

  svg {
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme, iconColor }) => iconColor ?? theme.black};
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
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`