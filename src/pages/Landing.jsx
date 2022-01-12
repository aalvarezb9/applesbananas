import React, { useState, useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cover from '../components/Cover/Cover'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Servicios from '../components/Servicios/Servicios'
import colors from '../utils/js/colors';
import '../styles/landing.css';
import Contacto from '../components/Contacto/Contacto'
import Acercade from '../components/Acercade/Acercade';

function Landing() {

    const [color, setColor] = useState('');

    useEffect(() => {
        Aos.init({duration: 3000});
        setColor(colors[random(0, 2)]);
    }, []);

    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }



    return (
        <div className='page clrGeneral'>
            <div id='navbar' data-aos='fade-down' className='header'>
                <Navbar color={color} setColor={setColor} />
            </div>
            <div className='content'>
                <div style={{overflow: 'hidden'}} data-aos='fade-up' className='hd'>
                    <Cover color={color} />
                </div>
                <div style={{overflow: 'hidden'}} data-aos='fade-right' className='hd'>
                    <Servicios />
                </div>
                <div style={{overflow: 'hidden'}} data-aos='fade-left' className='hd'>
                    <Contacto />
                </div>
                <div style={{overflow: 'hidden'}} data-aos='fade-right' className="hd">
                    <Acercade />
                </div>
                <Footer color={color} setColor={setColor} />
            </div>
        </div>
    )
}

export default Landing
