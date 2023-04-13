import styled from 'styled-components'

export const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const LayoutOutdoor = styled.div`
  width: 100%;
  max-width: 50vw;
  height: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.pink};
`
export const LayoutContent = styled.div`
  width: 100%;
  max-width: 50vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 64px;
`
export const LayoutHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.pink};
    margin-right: 16px;
  }
`
export const LayoutBody = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  margin: 64px 0 120px 0;

`
export const LayoutFooter = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  text-align: center;
  margin-top: auto;

  small {
    max-width: 300px;
    color: ${({ theme }) => theme.darkGray};
  }
`