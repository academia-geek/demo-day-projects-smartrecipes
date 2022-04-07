import styled from "styled-components";
import { VerdeLima } from "./ColoresEstilos";

export const SeachBarStyled = styled.div`

  display: flex;
  justify-content: center;
  flex-direction: row; 
  height: 40px;
  width: 100%;  
  background-color: white;
  border-radius: 10px;  
  form{
  display: contents;
  width: 80%;
  height: 100%;
  label{
    width: auto;
    input{
      padding: 0px 10px;
      height: 40px;
      width:480px;
      min-width: 420px;
      border-radius: 0px;
      border-top-left-radius : 6px;
      border-bottom-left-radius: 6px;
      border: 2.5px solid #C9E265;
    }
  }

  }
  .button{
    height: 100%;
    background-color: #C9E265;
    border: 0px;
    border-top-right-radius : 6px;
    border-bottom-right-radius: 6px;
  }
`