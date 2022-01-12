import Texto from "../Contacto/Texto"
import tutores from '../../data/tutores.json';
import TutoresCard from "./TutoresCard";

const Tutores = () => {

    const parrafo = 'Contamos con tutores de calidad y con las aptitudes necesarias para el aprendizaje correcto de sus niños.'

    return (
        <div className="tutores">
            <Texto titulo={'Tutores'} ancho={'100%'} parrafo={parrafo} />
            <ul className="tutoresContent">
                {tutores.map((tutor) => <TutoresCard key={tutor.id} tutor={tutor} />)}
            </ul>
        </div>
    )
}

export default Tutores
