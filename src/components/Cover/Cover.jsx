import Burbujas from '../Burbujas';
import Carru from './Carru';
import './cover.css';

const Cover = ({color}) => {

    return (
        <div className="coverContainer">
            <Carru />
            <Burbujas color={color} />
        </div>
    )
}

export default Cover;
