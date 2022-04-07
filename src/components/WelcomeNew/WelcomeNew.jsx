import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { WelcomeNewStyled } from "../../styles/styledComponents/WelcomeStyled";

const WelcomeNew = () => {
  const { userData, favorites } = useSelector((store) => store.login);

  return (
    <WelcomeNewStyled>
      <div className="title">
        <h1>Bienvenido {userData.name}</h1>
        <img alt="userPicture" src={userData.photoUrl} />
      </div>
      <div className="block1">
        <div className='left'>
          <Link to='/recetas'>
        <div className="textVar1">
          {favorites.length <= 0 ? <p>No tienes recetas favoritas, ¿qué tal si agregas unas?</p> : 
          <>
          <p>Estas son tus recetas favoritas</p>
          <div>
            {favorites.map((item, index) => (
              <div key={index}>
                <img src={item.image} style={{width: '200px'}} alt="" /> 
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          </>
          }
        </div>
        
        </Link>
      
        <div className="textVar2">
          <p>
            Deseamos conocerte más, ¿quieres agregar productos que no sean de tu
            agrado?
          </p>
        </div>
        <div className="textVar1">
          <div>
           <p> Alergias : </p>
              <div className="containerAlergies">
            {userData.alergia ? userData.checked.map((item, index) => {
              return <p key={index}>{item}</p> 
            }) : "No hay alergias"}
            </div>
          </div>
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
