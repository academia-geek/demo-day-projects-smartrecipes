import styled from "styled-components";

export const HeaderStyled = styled.div`
  margin: auto;
  border-radius: 10px;
  background-color: red;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
  height: 50px;
  width: 90%;
`;
export const CalendarioStyled = styled.div`
  width: 90%;
  height: 300px;
  margin: auto;
  background-color: white;
  text-align: center;
`;

export const SeguimientoPreciosStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: 750px;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y : scroll;
  /* overflow-x: scroll; */
  max-width: 70vw;
  gap: 20px;
  margin-bottom: 25px;
  @media only screen and (max-width: 600px) {
    min-height: 200px;
  }
`;

export const ProductoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 160px;
  cursor: pointer;
  img {
    pointer-events: none;
    width: 85px;
    height: 85px;
  }
  .dataName {
    pointer-events: none;
    font-weight: 700;
    padding: 0%;
    width: 120px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dataPrice {
    pointer-events: none;
    font-weight: 400;
    text-align: center;
    color: #8d96a8;
    width: 120px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media only screen and (max-width: 600px) {
    img {
      width: 100px;
    }
    .dataPrice {
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
`;

export const BotonPerfilUserStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 90%;
  margin: auto;
  background-image: url(https://res.cloudinary.com/davidcharif/image/upload/v1648085757/demoFakeApi/vegetables_1_ks8hyb.png);
  background-repeat: no-repeat;
  p {
    color: #ffffff;
    font-weight: 800;
    font-size: 28px;
    line-height: 28px;
    -webkit-text-stroke: 2px black;
  }
`;
