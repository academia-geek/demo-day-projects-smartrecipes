import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { SeguimientoPreciosStyled } from "../../../../styles/styledComponents/PagPrincipalStyles";
import {
  ButtonModal,
  ButtonParaModal,
  CardRecetas,
  ImgReceta,
} from "../../../../styles/styledComponents/RecipesStyle";
import ModalReceta from "./ModalReceta";

const CardReceta = ({ dataServer }) => {
  //modal
  const [modalShow, setModalShow] = useState(false);
  const [productoEstado, setProducto] = useState("vacio");
  console.log("Producto estado es vacio ? ", productoEstado === "vacio");
  const handleId = ({ target }) => {
    const label = target.getAttribute("data-label");
    const productoFiltro = dataServer.filter(
      (producto) => producto.label === label
    );    
    setProducto(productoFiltro);
    setModalShow(true);

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
                    <ModalReceta
                      producto={productoEstado}
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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
