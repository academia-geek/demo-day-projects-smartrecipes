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
              labels: ['04/02/2022', '04/03/2022', '04/04/2022','04/05/2022'],
              datasets: [
                {
                  id: 1,
                  label: 'Merqueo',
                  data: [4000,4000,3100,3500],
                  fill: false,
                  borderColor: '#fe000056',
                  backgroundColor: '#ff0000',
                  pointBorderColor: '#000000',
                  pointBackgroundColor: '#ff0000',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: '#4bc0c0',
                  pointHoverBorderColor: '#4bc0c0',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                
                }, {
                  id: 2,
                  label: 'Jumbo',
                  data: [4000,3600,2500,3600],
                  fill: false,
                  borderColor: '#25dc00',
                  backgroundColor: '#4cff4f',
                  pointBorderColor: '#0b6b00',
                  pointBackgroundColor: '#2f00ff',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: '#4bc0c0',
                  pointHoverBorderColor: '#4bc0c0',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  
                }
              ],
            }}          
          />
          
          <h3>Precios de la ultima semana</h3>
          <h3>Promedio COP${data.price}</h3>
          </div>
        </SideBarProductsStyle>
      )
    :<>
      <SideBarProductsStyle>
        <h3>Selecciona productos para compararlos</h3>
      </SideBarProductsStyle>
    </>}
    </>
  );
};

export default SideBar;
