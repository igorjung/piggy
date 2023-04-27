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
  
  @media screen and (max-width: 760px) {
    padding: 32px 32px 0 32px;
  }
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

  @media screen and (max-width: 760px) {
    display: none;
  }
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
export const LayoutMobileMenu = styled.ul`
  height: 60px;
  width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.white};
  padding: 0 32px;

  @media screen and (min-width: 760px) {
    display: none;
  }
`
export const LayoutMobileMenuItem = styled.li<{ isSelected: boolean }>`
  width: 60px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ isSelected, theme }) => isSelected ? theme.black : 'none'};
  border-radius: ${({ isSelected }) => isSelected ? '0 0 50% 50%' : '0'};

  svg {
    font-size: 18px;
    color: ${({ isSelected, theme }) => isSelected ? theme.white : theme.black};
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