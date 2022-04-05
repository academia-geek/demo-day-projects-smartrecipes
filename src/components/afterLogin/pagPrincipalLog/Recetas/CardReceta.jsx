import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionFunctionalCurrentWatchableRecipe } from "../../../../redux/action/actionFuntional";
import { SeguimientoPreciosStyled } from "../../../../styles/styledComponents/PagPrincipalStyles";
import {
  ButtonParaModal,
  CardRecetas,
  ImgReceta,
} from "../../../../styles/styledComponents/RecipesStyle";
import ModalReceta from "./ModalReceta";

const CardReceta = ({ dataServer }) => {
  //modal
  const [modalShow, setModalShow] = useState(false);
  const [productoEstado, setProducto] = useState("vacio");
  const dispatch = useDispatch();
  console.log("Producto estado es vacio ? ", productoEstado === "vacio");
  const handleId = ({ target }) => {
    const label = target.getAttribute("data-label");
    const productoFiltro = dataServer.find(
      (producto) => producto.label === label      
    )
    setProducto(productoFiltro);
    setModalShow(true);
    dispatch(actionFunctionalCurrentWatchableRecipe(productoFiltro))

  };

  return (
    <>
      <h3>Top Recetas</h3>
      <SeguimientoPreciosStyled>
        {dataServer.map((producto, index) => {
          return (
            <CardRecetas data-bs-target={`#id${index}`} key={index}>
              <div>
                <ImgReceta
                  src={producto.image}
                  alt="imagen-receta"
                  data-label={producto.label}
                  onClick={(e) => {
                    handleId(e);
                  }}
                />
                <p className="card-text text-capitalize">{producto.label}</p>

                {productoEstado !== "vacio" && (
                  <>
                    <ButtonParaModal data-label={producto.label} onClick={(e) => setModalShow(e)}>
                      Detalles
                    </ButtonParaModal>
                    {/* <ModalReceta
                      producto={productoEstado}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    /> */}
                  </>
                )}
              </div>
            </CardRecetas>
          );
        })}
      </SeguimientoPreciosStyled>
    </>
  );
};
export default CardReceta;
