import styled from 'styled-components'

export const TableWrapper = styled.div`
  width: 100%;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.white};
`
export const TableHeader = styled.ul`
  width: 100%;
  height: 40px;

  display: grid;
  grid-template-columns: 2fr repeat(12, 1fr);
  gap: 16px;

  padding: 0 16px;
  border-radius: 15px 15px 0 0;
  background-color: ${({ theme }) => theme.darkBlue};
`
export const TableHeaderColumn = styled.li`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.white};

  &:first-child {
    justify-content: flex-start;

    input {
      height: 16px;
      width: 16px;

      margin-right: 16px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.darkBlue};
      background-color: none;
      cursor: pointer;
    }
  }
`
export const TableLine = styled.ul`
  width: 100%;
  height: 36px;

  display: grid;
  grid-template-columns: 2fr repeat(12, 1fr);
  gap: 16px;

  padding: 0 16px;

  & + ul {
    border-top: 1px solid ${({ theme }) => theme.lightGray};
  }
`
export const TableColumn = styled.li<{ type?: number }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({type, theme}) => type === 1 ? theme.green : theme.red};

  &:first-child {
    justify-content: flex-start;
    color: ${({ theme }) => theme.black};

    input {
      height: 16px;
      width: 16px;

      margin-right: 16px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.darkBlue};
      background-color: none;
      cursor: pointer;
    }
  }
`
export const TableControl = styled.footer`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid ${({ theme }) => theme.lightGray};

  button {
    width: auto;
  }
`