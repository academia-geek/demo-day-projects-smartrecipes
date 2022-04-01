import { SplitButton } from "react-bootstrap";
import styled from "styled-components";
import { naranja, VerdeLima } from "./ColoresEstilos";


export const SideBarStyled = styled.div`
/* position: absolute;
top: 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;  
  background-color: ${VerdeLima};
  width: 300px;
  z-index: 2;
  height:100vh;
  top: 0px;
  .logo img {
    padding-top: 3rem;
  }
  .menu {
    min-width: 240px;
    width: 85%;
  }
  .iconSideBar {
    margin-right: 35px;
    color: #FF5757;
    font-size: 20px;
    font-weight: 400;
  }
  .iconSideBar:hover {
    color: #643A71;
  }

  ul{
    list-style: none;
    margin-top: 20px;
    
    div{
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      font-size: 1.2rem;
      font-weight: 700;
      color: ${naranja}
    }
  }
  .secondImg {
    display: block;
    margin: 0px auto;
  }
  button{
    border-radius: 10px;
    width: 90%;
  }
  
`
export const SplitStyled = styled(SplitButton)`
  width: 70%;
  .dropdown-toggle {
    background-color: #ff5757;
    width: 30px!important;
    color: #ffff;
  }
  .dropdown-toggle:hover {
    background-color: #FF8989;
  }
  .dropdown-toggle:focus {
    background-color: #eb763c;
    color: #ffff;
  }
`

