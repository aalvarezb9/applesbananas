import './contacto.css';
import Formulario from "./Formulario";
import Informacion from './Informacion';


const Contacto = () => {
    return (
        <div className='contacto' id='contacto'>
            <Formulario />
            <Informacion />
        </div>
    );
};

export default Contacto;
