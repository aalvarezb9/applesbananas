import Texto from "../Contacto/Texto";

const Historia = () => {

    const titulo = 'Historia';
    const ancho = '100%';
    const parrafo = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus voluptatum alias distinctio vitae itaque beatae similique ab, architecto facilis fuga officia labore cupiditate culpa aut error, aliquam nisi ad!\n' + 'Nisi maxime maiores totam eaque dolore debitis culpa! In commodi voluptatem blanditiis, quod consectetur vel exercitationem corporis praesentium natus inventore aperiam ex, eligendi id dicta, unde iure sequi error mollitia!';

    return (
        <div className="historia">
            <Texto titulo={titulo} ancho={ancho} parrafo={parrafo} />
        </div>
    )
}

export default Historia
