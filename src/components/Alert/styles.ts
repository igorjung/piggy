import styled from 'styled-components'

export const AlertWrapper = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
`
export const AlertContainer = styled.div`
  width: 600px;
  min-height: 300px;
  max-height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 32px 64px;
  background-color: ${({ theme }) => theme.lightGray};
  border-radius: 15px;
`
export const AlertBody = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 32px;

  svg {
    font-size: 64px;
    color: ${({ theme }) => theme.yellow};
    margin-bottom: 16px;
  }
`
export const AlertControl = styled.ul<{ itemsNumber: number }>`
  width: 100%;

  display: grid;
  flex-direction: row;
  grid-template-columns: ${({ itemsNumber }) => `repeat(${itemsNumber}, 1fr)`};
  gap: 16px;
`