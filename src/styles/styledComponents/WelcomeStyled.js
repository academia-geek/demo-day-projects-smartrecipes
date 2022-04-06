import styled from "styled-components";
import { naranja, VerdeLima } from "./ColoresEstilos";

export const WelcomeNewStyled = styled.div`
  padding: 30px;
  height: 1000px;
  overflow-y: scroll;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
  justify-content: flex-start;
  margin-bottom: 100px;
    h1 {
      width: 50%;
      font-size: 3rem;
      font-weight: 600;
      text-align: left;
      margin-top: 20px;
      color: ${naranja};
    }
    img {
      width: 50%;
      border-radius: 50%;
      height: 100px;
      width: 100px;
    }
  }
  .block1{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
   
    .left{
      width: 50%;

      .textVar1 {
      background-color: ${naranja};
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      p {
        font-size: 2rem;
        margin: 0%;
        font-weight: 700;
        color: white;
        text-align: center;
      }  
      @media (max-width: 1000px) {
        flex-direction: row;
      }
    }
    .textVar2 {
        padding: 2rem; 
        cursor: pointer;      
        p {
          font-size: 2rem;
          font-weight: 700;
          color: ${naranja};
        }
      }
      &:hover{
        background-color: ${naranja};
        p{
          color:white;
        }
      }
    }

  .image{
    width: 50%;
    img{
      width: max-content;
    }
  }
  
  }

  
  .innerTitle {
    text-align: center;
    h3 {
      font-size: 3rem;
      font-weight: 700;
      color: ${naranja};
    }
  }

  .firstBlock {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    .imgContainer {
      width: 25%;
      left: 0%;
      //Shadow img
      img {
        max-width: 300px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
    
  }
  .brandContainers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    img {
      width: 150px;
      border-radius: 25px;
      //hover
      &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
  }
  .secondBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    .firstImgContainer {
      width: 50%;
      left: 0%;
      //Shadow img
      img {
        max-width: 300px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
    .textContainer {
      padding: 2rem;
      width: 50%;
      height: 100%;
      p {
        font-size: 2rem;
        font-weight: 700;
        color: ${naranja};
        text-align: center;
      }
    }
  }
  .thirdBlock {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    .imgContainer {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      //Shadow img
      img {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      }
    }
    .textContainer {
      padding: 2rem;
      width: 50%;
      height: 100%;
      p {
        font-size: 54px;
        font-weight: 700;
        color: ${naranja};
        text-align: center;
      }
    }
  }
  a {
    text-decoration: none;
  }
`;
