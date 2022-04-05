import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const SideBarProductsStyle = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: scroll;
  flex-direction: column;  
  gap:30px;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${VerdeLima};
  .container-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    img{
      height: 150px;
    }
  }
  .container-historic{
    display: flex;
    background-color: white;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    align-items: center;
  }
`