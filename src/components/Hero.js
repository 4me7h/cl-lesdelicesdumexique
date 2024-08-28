import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';

import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <p className='text--small text--white'>Cuisine mexicaine à Salaberry-de-Valleyfield.</p>
                                    <h1 className="text--title text--white">Cuisine Mexicaine</h1>
                                    <h2 className="text--subtitle text--white">La meilleure saveur à votre portée <span className='    '><br />Découvrez les saveurs authentiques</span></h2>
                                    <p className='text--body text--white'>Notre restaurant à Salaberry-de-Valleyfield
                                    offre une cuisine mexicaine authentique, avec des plats préparés selon les traditions et les recettes familiales.</p>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/14374403777/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20comida%20mexiana">Découvrez notre menu</a>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Hero;