import styled from "styled-components";
import { naranja, VerdeLima } from "./ColoresEstilos";

export const SideBarStyled = styled.div`
/* position: absolute;
top: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;  
  background-color: ${VerdeLima};
  min-width:300;
  max-width: 400px;  
  height:100vh; 
  ul{
    list-style: none;
    div{
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: ${naranja}
    }
  }
  button{
    border-radius: 10px;
    width: 90%;
  }
`