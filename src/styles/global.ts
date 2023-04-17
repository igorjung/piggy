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
