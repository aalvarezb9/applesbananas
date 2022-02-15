import { useRef, useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal'
// import{ init } from '@emailjs/browser';
// init("user_gS9iwtxbYQd942WbjdyQC");

// import "./contacto.css";
const formulario = {
    nombre: '',
    correo: '',
    duda: '',
    tiempo: '',
}

const Formulario = () => {

    const formRef = useRef(null);

    const [form, setForm] = useState(formulario);
    
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const [titulo, setTitulo] = useState('');
    const [cuerpo, setCuerpo] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleClose = () => {
        setShow(false);
        setError('');
    }
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setForm(
            prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        );
        // console.log(form);
    }
    
    /*const validar = () => {

        const { nombre, correo, duda } = form;
        console.log(form);
        console.log(nombre);
        console.log(correo);
        console.log(duda);

        if (
            nombre.trim() == '' ||
            correo.trim() == '' ||
            duda.trim() == ''
        ) {
            setError('Todos los campos son obligatorios');
        }

        if (error) {
            console.log(error);
            return false;
        }

        console.log('si');
        console.log(error);
        return true;
    } */

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, correo, duda, tiempo } = form;


        if(
            nombre.trim() === '' ||
            correo.trim() === '' ||
            duda.trim() === ''
        ) {
            setTitulo('ERROR');
            setCuerpo('Por favor llene todos los campos');
            setShow(true);
            // setForm(form);
            return false;
        }

        // setTitulo('ÉXITO');
        // setCuerpo('El mensaje fue enviado correctamente');
        // formRef.current.reset();
        // setShow(true);

        setCargando(true);

        let hoy = new Date();
        let hora = hoy.getHours();

        if (hora >= 0 && hora < 6) {
            form.tiempo = 'una linda madrugada';
        } else if (hora >= 6 && hora < 12) {
            form.tiempo = 'una linda mañana';
        } else if (hora >= 12 && hora < 18) {
            form.tiempo = 'una linda tarde';
        } else {
            form.tiempo = 'una linda noche';
        }

        emailjs.send('service_2cwejbe', 'contact_form', form, 'user_gS9iwtxbYQd942WbjdyQC')
            .then((res) => {
                setTitulo('ÉXITO');
                setCuerpo('El mensaje fue enviado correctamente.');
                // setForm(formulario);
                setCargando(false);
                formRef.current.reset();
                setShow(true);
            }, (err) => {
                setTitulo('ERROR');
                setCuerpo('Ocurrió un error inesperado, intente de nuevo más tarde.')
                setCargando(false);
                setShow(true);
            })

    }

    return (
        <>
            <div className="formulario">
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control onChange={(e) => handleChange(e)} type="text" name="nombre" placeholder="Ingrese su nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control onChange={(e) => handleChange(e)} type="email" name="correo" placeholder="Ingrese su correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control onChange={(e) => handleChange(e)} as="textarea" name="duda" rows={10} placeholder="Ingrese su duda o comentario" />
                    </Form.Group>
                    <ButtonGroup>
                        <Button disabled={cargando} className="mb-3 btnC" type="submit">
                            {cargando ? 'Enviando...': 'Enviar'}
                        </Button>
                    </ButtonGroup>
                </Form>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{cuerpo}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Entendido
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Formulario
