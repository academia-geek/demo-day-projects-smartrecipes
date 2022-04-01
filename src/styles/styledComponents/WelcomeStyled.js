
import styled from 'styled-components';
import { naranja, VerdeLima } from './ColoresEstilos';

export const WelcomeNewStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color:${VerdeLima};
  display: flex;
  flex-direction: column;
  .title {
    h1{
    font-size: 128px;
    font-weight:700;   
    text-align: center;
    margin-top: 20px;
    color: ${naranja};

  }
  }
  .firstText{
    background-color: ${naranja};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    p{
      font-size: 24px;
      margin: 0%;
      font-weight: 700;
      color: white;
      text-align: center;
    }
  }
  `
