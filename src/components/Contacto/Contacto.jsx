import './contacto.css';
import Datos from './Datos';
import Formulario from "./Formulario";
// import Informacion from './Informacion';
import Texto from './Texto';


const Contacto = () => {

    const titulo = 'Contáctenos';
    const ancho = '300px';
    const parrafo = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptatum alias distinctio vitae itaque beatae similique ab, architecto facilis fuga officia labore cupiditate culpa aut error, aliquam nisi ad!\n' + 'Nisi maxime maiores totam eaque dolore debitis culpa! In commodi voluptatem blanditiis, quod consectetur vel exercitationem corporis praesentium natus inventore aperiam ex, eligendi id dicta, unde iure sequi error mollitia!';

    return (
        <div className='contacto' id='contacto'>
            <div className="contactoD">
                <Texto titulo={titulo} ancho={ancho} parrafo={parrafo} />
                <Formulario />
                <Datos />
            </div>
            {/* <Informacion /> */}
        </div>
    );
};

export default Contacto;
