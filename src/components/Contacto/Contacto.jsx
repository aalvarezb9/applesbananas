import './contacto.css';
import Datos from './Datos';
import Formulario from "./Formulario";
// import Informacion from './Informacion';
import Texto from './Texto';


const Contacto = () => {
    return (
        <div className='contacto' id='contacto'>
            <div className="contactoD">
                <Texto />
                <Formulario />
                <Datos />
            </div>
            {/* <Informacion /> */}
        </div>
    );
};

export default Contacto;
