import styled from 'styled-components'

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`
export const ModalContainer = styled.div`
  width: 600px;
  min-height: 300px;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 15px;

  @media screen and (max-width: 760px) {
    width: 100%;
    min-height: 100vh;

    border-radius: 0;
  }
`
export const ModalHeader = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const ModalBody = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  margin: 32px 0;

  li {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center
  }
`
export const ModalControl = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`