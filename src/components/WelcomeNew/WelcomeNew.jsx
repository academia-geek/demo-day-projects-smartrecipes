import React from "react";
import { useSelector } from "react-redux";
import { WelcomeNewStyled } from "../../styles/styledComponents/WelcomeStyled";

const WelcomeNew = () => {
  const { userData } = useSelector((store) => store.login);
  return (
    <WelcomeNewStyled>
      <div className="title">
        <h1>Bienvenido {userData.name}</h1>
        <img alt="userPicture" src={userData.photoUrl} />
      </div>
      <div className="block1">
        <div className='left'>
        <div className="textVar1">
          <p>No tienes recetas favoritas, ¿qué tal si agregas unas?</p>
        </div>
        <div className="textVar2">
          <p>
            Deseamos conocerte más, ¿quieres agregar productos que no sean de tu
            agrado?
          </p>
        </div>
        </div>
      <div className="image">
        <img
          src="https://res.cloudinary.com/davidcharif/image/upload/v1648820705/demoFakeApi/Plan--5ec7b84e01d0360018d4c0e8_eiyizw.png"
          alt="sad"
        />
      </div>

      </div>
      {/* <div className="firstBlock">
        <div>
          <p>Si</p>
        </div>
      </div>

      <div className="secondBlock">
        <div className="textContainer">
          <p>
            Alergias : {userData.alergia ? userData.alergia : "No hay alergias"}
          </p>
        </div>
        <div className="imgContainer">
          <img
            alt="girl"
            src="https://res.cloudinary.com/davidcharif/image/upload/v1648820705/demoFakeApi/Plan--5ec7b84e01d0360018d4c0e8_eiyizw.png"
          />
        </div>
      </div>
      <div className="thirdBlock">
        <div className="imgContainer">
          <img
            alt="Img"
            src="https://res.cloudinary.com/davidcharif/image/upload/v1648315820/demoFakeApi/imagenSideBar_brl1vb.png"
          />
        </div>
        <div className="textContainer">
          <p>Disfruta tu experiencia!</p>
        </div>
      </div> */}
    </WelcomeNewStyled>
  );
};

export default WelcomeNew;
