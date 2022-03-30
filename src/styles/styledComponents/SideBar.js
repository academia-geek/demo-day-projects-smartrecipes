import styled from "styled-components";

export const SideBarProductsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:30px;
  align-items: center;
  justify-content: center;
  background-color: #FCAC5D;
  .container-img{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
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