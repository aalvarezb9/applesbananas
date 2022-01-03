import React, { useState, useEffect } from 'react'
import Cover from '../components/Cover/Cover'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Servicios from '../components/Servicios/Servicios'
import colors from '../utils/js/colors';
import '../styles/landing.css';
import Contacto from '../components/Contacto/Contacto'

function Landing() {

    const [color, setColor] = useState('');

    useEffect(() => {
        setColor(colors[random(0, 2)]);
    }, []);

    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }


    return (
        <div className='page clrGeneral'>
            <div className="header">
                <Navbar color={color} setColor={setColor} />
            </div>
            <div className="content">
                <Cover />
                <Servicios />
                <Contacto />
                <Footer color={color} setColor={setColor} />
            </div>
        </div>
    )
}

export default Landing
