import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFunctionalCloseSide } from "../../../redux/action/actionFuntional";
import { SideBarProductsStyle } from "../../../styles/styledComponents/SideBar";
import 'chart.js/auto';
import { Chart, Line } from 'react-chartjs-2';
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
          <p>Peso : {data.weight}</p>
          <p>{data.name}</p>
          </div>
          
          <div className="container-historic">
          <Line  
          datasetIdKey='id'
             data={{
              labels: ['04/02/2022', '04/02/2022', '04/02/2022'],
              datasets: [
                {
                  id: 1,
                  label: '',
                  data: [3900, 4200, 3400],
                }
              ],
            }}          
          />
          
          <h3>Precios de la ultima semana</h3>
          <h3>Promedio COP${data.price}</h3>
          </div>
        </SideBarProductsStyle>
      )
    :<div>No hay nada aqui 🤗</div>}
    </>
  );
};

export default SideBar;
