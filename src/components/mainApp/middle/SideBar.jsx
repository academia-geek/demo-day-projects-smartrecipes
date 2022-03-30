import React from "react";
import { useSelector } from "react-redux";
import { SideBarProductsStyle } from "../../../styles/styledComponents/SideBar";

const SideBar = () => {
  const {
    currentWatchableObject: { data },
  } = useSelector((store) => store.funtional);
  
  const isUndefined = Object.keys(data).length === 0;

  if (isUndefined) {
    console.log("No render 😠😠😠😠😠😠");
    return null;
  } else {
    console.log("RENDER TIME!!!!!!!! 😲🔥  ");
   
  }

  return (
    <>
      {!isUndefined && (
        <SideBarProductsStyle>
          
          <div className="container-img">
          <img src={data.img} alt=""></img>
          <p>{data.name}</p>
          </div>
          <div className="container-historic">
          <img src="https://res.cloudinary.com/davidcharif/image/upload/v1648602734/demoFakeApi/variacionPrecio_wqdpq5.png" alt="variacion"/>
          <h3>Precios de la ultima semana</h3>
          </div>
        </SideBarProductsStyle>
      )}
    </>
  );
};

export default SideBar;
