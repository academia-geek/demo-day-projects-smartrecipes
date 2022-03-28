import styled from "styled-components";

export const SeachBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 8px 8px 8px 16px;
  width: 100%;
  .text{
   
   
   color: #565959;
   background-color: #F3F3F3;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 12px;

  }
  form{
    display: flex;
  flex-direction: row;
  width: 90%;
  }
  .button{
    height: 100%;
    background-color: #F0AD64;
    border: 0px;
  }
`