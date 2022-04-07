import { Button, Col, Form } from "react-bootstrap";
import styled from "styled-components";

 
export const DivLogin = styled.div`
  padding-top: 6rem;
  padding-bottom: 5.5rem;
  width: 100%;
  z-index: 2;
`;



export const LoginCol = styled(Col)`
  background-color: #C9E265;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;

`;

//styled of div 
export const LoginStyled = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  width: 479px;
  
  max-height: contain;
  border-radius: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  .login-text {
    text-align: center;
    padding: 2rem 0px;
  }
  h4 {
    text-align: center;
  }
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 420px;
    .login-text {
      padding: 15px 0px;
    }
  }
`


export const FormLogin = styled(Form)`
  width: 75%;
  display: block;
  margin: 15px Auto; 
  font-weight: 400;
  font-size: 14px;
  height: auto;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
  .error{
    color: red;   
    border: 1px solid red; 
  }
  .error-message{
    color: red;
    margin: 0px;
    padding: 0px;
  }
`;

export const ButtonLogin = styled(Button)`
  background-color: #008f3e;
  color: #FFFF;
  border: none;
  width: 50%;
  display: block;
  margin: 10px Auto 0px;
  p{
    text-align: center;    
    font-size: 30px;
    text-decoration: none;
  }
  &:hover {
    background-color: #00ba51;
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background-color: #00ba51;
    color: #ffffff;
  }
  @media only screen and (max-width: 600px) {
    width: 65%;
  }
`;

export const IconCol = styled(Col)`
  width: 50%;
  display: block;
  margin: 10px Auto 0px;
  text-align: center;
  .iconLogin {
    font-size: 30px;
    margin: 0px 15px;
    color: #3b5998;
  }
  @media only screen and (max-width: 600px) {
    width: 65%;
  }
`;
