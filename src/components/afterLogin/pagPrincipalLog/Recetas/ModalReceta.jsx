import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  console.log(props)
  const {dataServer} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalles de la receta
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{dataServer.label}</h4>
        <p>
        {dataServer.label}
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;