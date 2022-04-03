
import styled from 'styled-components';
import { naranja, VerdeLima } from './ColoresEstilos';

export const WelcomeNewStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color:${VerdeLima};
  display: flex;
  flex-direction: column;
  gap:100px;
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
    
    @media (max-width: 1000px) {
      flex-direction: row;    
  }
}
  .innerTitle{
    text-align: center;
    h3{
      font-size: 85px;
      font-weight: 700;
      color: ${naranja};
    }
  }

  .firstBlock{
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 2rem;

    .firstImgContainer{
      width: 50%;  
      left: 0%;
      //Shadow img
      img{
      max-width: 300px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
      
    }
    .textContainer{
      padding: 2rem;
      width: 50%;
      height: 100%;
    p{      
      font-size: 54px;
      font-weight: 700;      
      color: ${naranja};
    }
  }
}
.brandContainers{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  img{
    border-radius: 25px;
    //hover 
    &:hover{
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
.secondBlock{
  display: flex;
  flex-direction:column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  .firstImgContainer{
    width: 50%;
    left: 0%;
    //Shadow img
    img{
    max-width: 300px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  }
  .textContainer{
    padding: 2rem;
    width: 50%;
    height: 100%;
    p{
      font-size: 54px;
      font-weight: 700;
      color: ${naranja};
      text-align: center;
    }
}
}
.thirdBlock{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  .imgContainer{    
    width: 50%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    //Shadow img
    img{    
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  }
  .textContainer{
    padding: 2rem;
    width: 50%;
    height: 100%;
    p{
      font-size: 54px;
      font-weight: 700;
      color: ${naranja};
      text-align: center;
    }
  }
}



  `
