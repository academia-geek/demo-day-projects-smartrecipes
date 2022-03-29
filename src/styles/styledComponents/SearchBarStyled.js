import styled from "styled-components";

export const SeachBarStyled = styled.div`
  display: flex;
  flex-direction: row; 
  height: 50px;
  width: 100%;  
  background-color: white;
  border-radius: 10px;  
  form{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  label{
    width: 100%;
    input{
      padding: 0px 10px;
      height: 50px;
      width:90%;
      border-radius: 10px;
    }
    }

  }
  .button{
    height: 100%;
    background-color: #F0AD64;
    border: 0px;
  }
`