import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../../utils/img/LOGO.jpg';
import colors from '../../utils/js/colors';
import './navbar.css';

const Navbar = ({color, setColor}) => {

    const [pressed, setPressed] = useState('home');

    const handleColor = () => {
        let indice = random(0, 2);
        while(colors[indice] === color) {
            indice = random(0, 2);
        }
        // colors[indice] === color ? indice = random(0, 2): setColor(colors[indice]);
        setColor(colors[indice]);
    }

    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    return (
        <div className="nvCustomContainer" >
            <Nav
                className="nvCustom"
                defaultActiveKey="/"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                <Nav.Item>
                    <div className="logo">
                        <img onClick={handleColor} src={LOGO} alt="APPLES N' BANANAS" height='100px' width='100px' />
                    </div>
                </Nav.Item>
                <Nav.Item>
                    {pressed === 'home'? 
                        <Nav.Link onClick={() => setPressed('home')} style={{background: '#F4E1A1'}} className='itemC' href="/" >Inicio</Nav.Link>: 
                            <Nav.Link onClick={() => setPressed('home')} className='itemC' href="/" >Inicio</Nav.Link>
                    }
                </Nav.Item>
                <Nav.Item>
                    {pressed === 'servicios'? 
                        <Nav.Link onClick={() => setPressed('servicios')} style={{background: '#F4E1A1'}} className='itemC' href="#servicios" eventKey="link-1" >Servicios</Nav.Link>: 
                            <Nav.Link onClick={() => setPressed('servicios')} className='itemC' href="#servicios" eventKey="link-1">Servicios</Nav.Link>
                    }
                </Nav.Item>
                <Nav.Item>
                    {pressed === 'contacto'? 
                        <Nav.Link onClick={() => setPressed('contacto')} style={{background: '#F4E1A1'}} className='itemC' href="#contacto" eventKey="link-2" >Contacto</Nav.Link>: 
                            <Nav.Link onClick={() => setPressed('contacto')} className='itemC' href="#contacto" eventKey="link-2">Contacto</Nav.Link>
                    }
                </Nav.Item>
                <Nav.Item>
                    {pressed === 'acecade'? 
                        <Nav.Link onClick={() => setPressed('acecade')} style={{background: '#F4E1A1'}} className='itemC' href="#acecade" eventKey="link-3" >Acerca de</Nav.Link>: 
                            <Nav.Link onClick={() => setPressed('acecade')} className='itemC' href="#acecade" eventKey="link-3">Acerca de</Nav.Link>
                    }
                </Nav.Item>
            </Nav>
            <hr style={{color: '#B4CBDC', marginBottom: '2px'}} />
            <hr style={{color: '#F4E1A1', marginBottom: '2px', marginTop: '2px'}} />
            <hr style={{color: '#2A74A4', marginBottom: '2px', marginTop: '2px'}} />
        </div>
    );
};

export default Navbar;

