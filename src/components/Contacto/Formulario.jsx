import { Form, Button, ButtonGroup } from "react-bootstrap";
// import "./contacto.css";

const Formulario = () => {
    return (
        <div className="formulario">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Ingrese su duda o comentario" />
                </Form.Group>
                <ButtonGroup>
                    <Button className="mb-3 btnC">Enviar</Button>
                </ButtonGroup>
            </Form>
        </div>
    )
}

export default Formulario
