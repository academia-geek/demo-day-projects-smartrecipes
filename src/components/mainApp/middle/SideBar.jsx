import React from "react";
import { useSelector } from "react-redux";
import { SideBarProductsStyle } from "../../../styles/styledComponents/SideBar";


const SideBar = () => {
  const {
    currentWatchableObject: { data },
  } = useSelector((store) => store.funtional);
  console.log(Object.keys(data).length, "data");
  const isUndefined = Object.keys(data).length === 0;

  if (isUndefined) {
    console.log("SAD TIME!!!!!!!! 😕 🎈  ");
    return null;
  } else {
    console.log("RENDER TIME!!!!!!!! 😲🔥  ");
    console.log(data);
  }

  return (
    <>
      {!isUndefined && (
        <SideBarProductsStyle>
          
          <div className="container-img">
          <img src={data.img} alt=""></img>
          <p>{data.name}</p>
          </div>

        </SideBarProductsStyle>
      )}
    </>
  );
};

export default SideBar;
