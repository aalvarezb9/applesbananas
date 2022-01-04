import Texto from "../Contacto/Texto"
import Servicio from "./Servicio";
import './servicios.css';

const Servicios = () => {

    const titulo = 'Servicios';
    const ancho = '100%';
    const parrafo = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptatum alias distinctio vitae itaque beatae similique ab, architecto facilis fuga officia labore cupiditate culpa aut error, aliquam nisi ad!\n' + 'Nisi maxime maiores totam eaque dolore debitis culpa! In commodi voluptatem blanditiis, quod consectetur vel exercitationem corporis praesentium natus inventore aperiam ex, eligendi id dicta, unde iure sequi error mollitia!';

    return (
        <div id="servicios" className="servicios">
            <div className="textoS">
                <Texto titulo={titulo} ancho={ancho} parrafo={parrafo} />
            </div>
            <Servicio />
        </div>
    )
}

export default Servicios
