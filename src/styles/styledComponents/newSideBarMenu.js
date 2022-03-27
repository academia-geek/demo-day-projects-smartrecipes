import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const SideBarStyled = styled.div`
/* position: absolute;
top: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${VerdeLima};
  width: 300px;
  z-index: 2;
  height: 100vh;
  ul{
    list-style: none;
    div{
      display: flex;
      flex-direction: row;
    }
  }
  button{
    border-radius: 10px;
    width: 90%;
  }
`