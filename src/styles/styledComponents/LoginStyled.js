import { Button, Col, Form } from "react-bootstrap";
import styled from "styled-components";

export const DivLogin = styled.div`
  padding-top: 6rem;
  padding-bottom: 5.5rem;
  width: 100%;
`;

export const FormLogin = styled(Form)`
  width: 35%;
  display: block;
  margin: 15px Auto;
  font-family: "Roboto";
  font-weight: 400;
  font-size: 14px;
  height: auto;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const ButtonLogin = styled(Button)`
  background-color: #f3d184;
  color: #333333;
  border: none;
  width: 50%;
  font-size: 15px;
  display: block;
  margin: 10px Auto 0px;
  text-align: center;
  &:hover {
    background-color: #242f3e;
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background-color: #242f3e;
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
