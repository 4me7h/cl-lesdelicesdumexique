import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';
import logo from '../images/logo.jpg';

import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });
    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay hero__overlay--white"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <Zoom triggerOnce cascade>
                                    <img className="image__logo" alt="logo" src={logo}/>
                                    <p className='text--small text--primary'>Délices épicés, saveurs riches, et la chaleur du Mexique vous attendent ici en France.</p>
                                    <h1 className="text--title">Cuisine Mexicaine</h1>
                                    <h2 className="text--subtitle text--primary">La meilleure saveur à votre portée <span className='    '><br />Découvrez les saveurs authentiques</span></h2>
                                    <p className='text--body'>Notre restaurant à Tuxtla Gutiérrez offre une cuisine mexicaine authentique, avec des plats préparés selon les traditions et les recettes familiales.</p>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/5219617044610/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20megacable%20internet">Nous garantissons des saveurs</a>
                                </Zoom>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='polygon'>
                <div className='polygon__top--left'></div>
            </div>
        </section>
    )
}

export default Hero;