import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import '../Footer/footer.css';
import './datos.css';

const Datos = () => {
    return (
        <div className="datos">
            <div className="iconContainer">
                <div className="fbContainer">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/applesnbananashn"
                    >
                        <BsFacebook className='icon icon2 fb' />
                    </a>
                    <p>
                        Apples N' Bananas
                    </p>
                </div>
                <hr className='sep' />
                <div className="igContainer">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/applesnbananashn/"
                    >
                        <BsInstagram className='icon icon2 ig' />
                    </a>
                    <p>
                        Apples N' Bananas
                    </p>
                </div>
                <hr className='sep' />
                <div className="emContainer">
                    <a
                        href="#contacto"
                    >
                        <FiMail className='icon icon2 em' />
                    </a>
                    <p>
                        applesnbananas.edu@gmail.com
                    </p>
                </div>
                <hr className='sep' />
                <div className="whContainer">
                    <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=50497957646"
                    >
                        <BsWhatsapp className='icon icon2 wh' />
                    </a>
                    <p>
                        +504 0000000
                    </p>
                </div>
                <hr className='sep' />
            </div>
        </div>
    )
}

export default Datos
