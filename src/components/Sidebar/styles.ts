import styled from 'styled-components'

export const SidebarController = styled.button<{ isOpen: boolean }>`
  height: 32px;
  width: 32px;

  position: fixed;
  top: 40px;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
  border-radius: ${({ isOpen }) => isOpen ? '0' : '0 10px 10px 0'};

  cursor: pointer;

  svg {
    font-size: 18px;
  }

  @media screen and (min-width: 760px) {
    left: ${({ isOpen }) => isOpen ? '280px' : '0'};
  }

  @media screen and (max-width: 760px) {
    ${({ isOpen }) => isOpen ? 'right: 32px' : 'left: 0'};
  }

  @media screen and (max-width: 500px) {
    ${({ isOpen }) => isOpen ? 'right: 0px' : 'left: 0'};
  }
`
export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 320px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: ${({  isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.white};
  padding: 40px 32px 64px 64px;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`
export const SidebarHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 64px;

  svg {
    font-size: 32px;
    color: ${({ theme }) => theme.pink};
    margin-right: 8px;
  }
`
export const SidebarNav = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  overflow-y: auto;
`
export const SidebarItem = styled.li<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: ${({ isSelected }) => isSelected ? 'default' : 'pointer'};

  svg {
    font-size: 20px;
    margin-right: 8px;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
    color: ${({ isSelected, theme }) => isSelected ? theme.darkGray : theme.black};
  }

  & + li {
    margin-top: 16px;
  }
`
export const SidebarFooter = styled.button`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: auto;
  padding-top: 32px;
  cursor: pointer;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.red};
    margin-right: 8px;
  }

  strong {
    font-size: 18px;
    font-weight: 500;
  }
`