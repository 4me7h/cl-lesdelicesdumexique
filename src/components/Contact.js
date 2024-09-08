import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

import imgmexico from '../images/img-41.jpg'
const Contact = () => {
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className='headercontent__header__content'>
                                    <h3 className="text--subtitle text--secondary">Contactez-nous
                                    </h3>
                                </div>  
                                <div className="headercontent__content">
                                    <p className="text--lead text-uppercase text--secondary">
                                    Entrez en contact et commencez à profiter de nos délices mexicains
                                    </p>    
                                </div>
                                <a className="btn btn--primary" target="__blank" href="https://wa.me/14374403777/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20comida%20mexiana">Commandez maintenant</a>
                                <img src={imgmexico} alt="mexican-food" className='contact__img--logomegavida' />
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;