import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
// import Burbujas from '../Burbujas';
import './footer.css';

const Footer = ({color, setColor}) => {
    return (
        <>
            <hr style={{color: '#2A74A4', marginBottom: '2px', marginTop: '2px'}} />
            <hr style={{color: '#F4E1A1', marginBottom: '2px', marginTop: '2px'}} />
            <hr style={{color: '#B4CBDC', marginBottom: '2px', marginTop: '2px'}} />
            <div className='footerContainer'>
                <div className="iconContainer">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/applesnbananashn"
                    >
                        <BsFacebook className='icon fb' />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/applesnbananashn/"
                    >
                        <BsInstagram className='icon ig' />
                    </a>
                    <a
                        href="#contacto"
                    >
                        <FiMail className='icon em' />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://api.whatsapp.com/send?phone=50497957646"
                    >
                        <BsWhatsapp className='icon wh' />
                    </a>
                </div>
                <div className="copyright">
                    <p className='clrGeneral'>
                        &#169; Apples N' Bananas. 2021. Honduras.
                    </p>
                </div>
            </div>
            {/* <Burbujas color={color} /> */}
        </>
    )
}

export default Footer
