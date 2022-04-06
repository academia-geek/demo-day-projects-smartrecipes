import styled from 'styled-components';
import { Button } from "react-bootstrap";

export const ContainerMainProductos = styled.div`
  display: flex;
  flex-direction: column;
  p{
    margin: 0;
    padding: 0;
  }
  h5 {
    text-align: center;
    margin-right: 15px;
    font-family: 'Nunito';
    font-weight: 600;
    font-size: 20px;
    color: #3B470B;
  }
  .containerButton {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
`

export const ButtonPrice = styled(Button)`
  background-color:  #ffffff;
  border: none;
  width: 40%;
  height: 65px;
  max-width: 250px;
  background-image:${props => props.jumbo ? "url('https://res.cloudinary.com/david-b/image/upload/c_fit,co_rgb:ffffff,f_auto,h_70,q_auto:best,w_173/v1649213799/AG/demoday/jumbo_h3bxkz.png')"
    : "url('https://res.cloudinary.com/david-b/image/upload/c_scale,w_150/v1649214238/AG/demoday/Merqueo-PW_1_lntogc_rprjdy.png')"};
  background-repeat: no-repeat;
  background-position: center;
  border: 2.5px solid #C9E265;
  border-radius: 50px;
  p{
    text-align: center;    
    font-size: 30px;
    text-decoration: none;
  }
  &:hover {
    background-color: #ffffff;
    border: ${props => props.jumbo ? "2.5px solid #4DB852"
    : "2.5px solid #D0006F"};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  &:focus {
    outline: none;
    background-color: #ffffff;
    border: ${props => props.jumbo ? "2.5px solid #4DB852"
    : "2.5px solid #D0006F"};
    box-shadow: ${props => props.jumbo ? "0 0 0 0.25rem rgb(77 184 82 / 50%)"
    : "0 0 0 0.25rem rgb(208 0 11 / 50%)"} ;
  }
  @media only screen and (max-width: 600px) {
    width: 65%;
  }
`;

const ButtonPrueba = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;