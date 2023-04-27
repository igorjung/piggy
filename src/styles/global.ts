import styled, { createGlobalStyle } from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled(Form)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 32px;
  }
`
export const FormBody = styled.ul`
  width: 100%;
  max-width: 600px;
  height: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: auto;
  gap: 16px;

  margin-top: 32px;
`
export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const SectionLine = styled.ul`
  width: 100%;
  max-width: 600px;
  height: 100%;

  display: flex;
  flex-direction: grid;
  gap: 32px;
  justify-content: center;

  padding: 32px;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 32px 0;
  }
`
export const SectionColumn = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  span {
    width: 100%;

    border-top: ${({ theme }) => `2px solid ${theme.darkGray}`};
    padding-top: 4px;
    margin-top: 4px;
  }

  strong {
    padding-left: 8px;
  }
`

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100%;
    font: 400 15px Roboto, sans-serif;
  }
  button, input {
    border: 0;
    background: none;
    
    &:focus {
      outline: none;
    }
  }
  ul,li {
    list-style-type: none;
  }
  h1 {
    font: 600 24px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 600 18px Roboto, sans-serif;
    }
  }
  h2 {
    font: 600 16px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 600 14px Roboto, sans-serif;
    }
  }
  p {
    font: 300 12px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 300 10px Roboto, sans-serif;
    }
  }
  strong {
    font: 600 16px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 600 14px Roboto, sans-serif;
    }
  }
  span {
    font: 600 12px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 600 10px Roboto, sans-serif;
    }
  }
  small {
    font: 100 12px Roboto, sans-serif;

    @media screen and (max-width: 760px) {
      font: 100 10px Roboto, sans-serif;
    }
  }
`;
