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
  justify-content: flex-start;

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
export const LayoutContent = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 64px;
`
export const LayoutSidebar = styled.ul`
  height: 100%;
  width: 250px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  border-right: 1px solid ${({ theme }) => theme.darkGray};
  padding: 64px 0;
`
export const LayoutSidebarItem = styled.li<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    font-size: 18px;
    margin-right: 10px;
  }

  strong {
    font-size: 16px;
    font-weight: 600;
    color: ${({ isSelected, theme }) => isSelected ? theme.darkGray : theme.black};
  }

  cursor: ${({ isSelected }) => isSelected ? 'default' : 'pointer'};
`
export const LayoutBody = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
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