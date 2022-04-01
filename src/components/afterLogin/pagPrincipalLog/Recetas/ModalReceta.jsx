import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { UlStyled } from "../../../../styles/styledComponents/detalleListaStyled";

const ModalReceta = (props) => {
  const { producto, onHide } = props;
  console.log('producto en ModalReceta', producto[0].label)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
      className="estilo-modal"

    >
      <Modal.Header closeButton>
        <Modal.Title className="contained-modal-title-center">
         <p>{producto[0].label}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        
        <UlStyled >
      {producto[0].healthLabels.map((label, index) => {
        return (
            <i key={index}><strong>{label}</strong></i>
        );
      })}
      </UlStyled>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalReceta;