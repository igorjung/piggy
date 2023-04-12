import styled from 'styled-components'

export const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.lightGray};
  padding: 40px 64px 64px 64px;
`
export const LayoutHeader = styled.header`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      font-size: 24px;
      color: ${({ theme }) => theme.black};
    }
  }
`
export const LayoutBody = styled.section`
  width: 100%;
  max-width: 1120px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 120px 0;
`
export const LayoutFooter = styled.footer`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  text-align: center;

  small {
    max-width: 350px;
    color: ${({ theme }) => theme.darkGray};
  }
`