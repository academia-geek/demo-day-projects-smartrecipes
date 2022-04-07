import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFunctionalCloseSide } from "../../../redux/action/actionFuntional";
import { SideBarProductsStyle } from "../../../styles/styledComponents/SideBar";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
const SideBar = () => {
  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);
  const [average, setAverage] = useState(0)
  const {
    currentWatchableObject: { data, id },
    currentWatchableObject,
    path,
  } = useSelector((store) => store.funtional);

  const { activeLook } = useSelector((store) => store.add);
  const isUndefined = Object.keys(data).length === 0;
  const dispatch = useDispatch();
  const handleClose = () => {
    console.log("close");
    dispatch(actionFunctionalCloseSide());
  };
  const getHistoricFromFirebase = async () => {
    if (id.length === 0) {
      return console.log("No hay producto seleccionado");
    }
    const historicPrices = [];
    let data;
    if (activeLook === "merqueo") {
      const traerCollectionHistoric = await collection(
        db,
        `merqueo/${path}/Historico/${id}/preciosDiarios`
      );
      data = await getDocs(traerCollectionHistoric);
    } else {
      const traerCollectionHistoric = await collection(
        db,
        `cornershop/${path}/Historico/${id}/preciosDiarios`
      );
      data = await getDocs(traerCollectionHistoric);
    }
    data.forEach((element) => {
      historicPrices.push(element.data());
    });
    formatHistoricPrices(historicPrices);
  };

  const formatHistoricPrices = (historicPrices) => {
    const historicPricesFormated = [];
    const historicDatesFormated = [];
    const length = historicPrices.length;
    let accumulate = 0
    historicPrices.forEach((element) => {
      accumulate += element.price
      historicPricesFormated.push(element.price);
      historicDatesFormated.push(element.date);
    });
    let innerAverage = accumulate / length;
    setAverage(innerAverage)

    setDates(historicDatesFormated);
    setPrices(historicPricesFormated);
  };
  
  useEffect(() => {
    getHistoricFromFirebase();
  }, [data]);

  return (
    <>
      {!isUndefined ? (
        <SideBarProductsStyle>
          <button onClick={() => handleClose()}>Delete product</button>
          <div className="container-img">
            <img src={data.img} alt="" />
            <p>Peso : {data.weight}</p>
            <p>{data.name}</p>
          </div>

          <div className="container-historic">
            {dates.length > 0 && (
              <Line
                datasetIdKey="id"
                data={{
                  labels: dates,
                  datasets: [
                    {
                      id: 1,
                      label: activeLook === "merqueo" ? "Merqueo" : "Jumbo",
                      data: prices,
                      fill: false,
                      borderColor: activeLook === "merqueo" ? "#ff0000" : "#219d1a",
                      backgroundColor:activeLook === "merqueo" ? "#ff0000" : "#219d1a",
                      pointBorderColor: "#000000",
                      pointBackgroundColor: activeLook === "merqueo" ? "#ff0000" : "#219d1a",
                      pointBorderWidth: 2,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "#4bc0c0",
                      pointHoverBorderColor: "#4bc0c0",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                    },
                    // {
                    //   id: 2,
                    //   label: "Jumbo",
                    //   data: [2900, 3000, 2950, 3060],
                    //   fill: false,
                    //   borderColor: "#25dc00",
                    //   backgroundColor: "#4cff4f",
                    //   pointBorderColor: "#0b6b00",
                    //   pointBackgroundColor: "#2f00ff",
                    //   pointBorderWidth: 1,
                    //   pointHoverRadius: 5,
                    //   pointHoverBackgroundColor: "#4bc0c0",
                    //   pointHoverBorderColor: "#4bc0c0",
                    //   pointHoverBorderWidth: 2,
                    //   pointRadius: 1,
                    //   pointHitRadius: 10,
                    // },
                  ],
                }}
              />
            )}

            <h3>Precios de la ultima semana</h3>
            <h3>Promedio COP${average}</h3>
          </div>
        </SideBarProductsStyle>
      ) : (
        <>
          <SideBarProductsStyle>
            <div>
              <h3>Esta es tu barra auxiliar</h3>
              <p>Se adaptara a la pagina en dónde estes</p>
            </div>
          </SideBarProductsStyle>
        </>
      )}
    </>
  );
};

export default SideBar;
