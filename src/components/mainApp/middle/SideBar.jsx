import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFunctionalCloseSide } from "../../../redux/action/actionFuntional";
import { SideBarProductsStyle } from "../../../styles/styledComponents/SideBar";

const SideBar = () => {
  const {
    currentWatchableObject: { data },
  } = useSelector((store) => store.funtional);
  
  const isUndefined = Object.keys(data).length === 0;
  const dispatch = useDispatch();
  const handleClose = () => {
    console.log("close");
    dispatch(actionFunctionalCloseSide())
  }
  return (
    <>
      {!isUndefined ? (
        <SideBarProductsStyle>          
          <button onClick={() => handleClose()}>Close Side Bar</button>
          <div className="container-img">
          <img src={data.img} alt=""></img>
          <p>{data.name}</p>
          </div>
          <div className="container-historic">
          <img src="https://res.cloudinary.com/davidcharif/image/upload/v1648602734/demoFakeApi/variacionPrecio_wqdpq5.png" alt="variacion"/>
          <h3>Precios de la ultima semana</h3>
          </div>
        </SideBarProductsStyle>
      )
    :<div></div>}
    </>
  );
};

export default SideBar;
