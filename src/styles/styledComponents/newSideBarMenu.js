import { SplitButton } from "react-bootstrap";
import styled from "styled-components";
import { naranja, VerdeLima } from "./ColoresEstilos";

export const SideBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${VerdeLima};
  width: 180px;
  z-index: 2;
  height: 100vh;
  top: 0px;
  .logo img {
    padding-top: 0.2rem;
    width: 100px;
  }
  .menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      padding: 0;
      list-style: none;
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
  .footer{
    display: flex;
    flex-direction: column;    
    justify-content: center;
    width: 100%;
    .secondImg {      
      height: 150px;
      margin: 0px auto;
    }
    button {
      border-radius: 10px;
      width: 90%;
    }
  }
`;
export const SplitStyled = styled(SplitButton)`
  width: 70%;
  .dropdown-toggle {
    background-color: #ff5757;
    width: 30px !important;
    color: #ffff;
  }
  .dropdown-toggle:hover {
    background-color: #ff8989;
  }
  .dropdown-toggle:focus {
    background-color: #eb763c;
    color: #ffff;
  }
`;

export const DivCategoryStyle = styled.div`
  padding: 10px;
  cursor: pointer;
  .iconSideBar {
    margin-right: 5px;
  }
  p {
    margin: 0px;
  }
  a{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    font-weight: 500;
    color: ${naranja};
    align-items: flex-start;        
    &:hover {
      color: #643a71;
      font-weight: 700;
    }
    }
`;
