import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Fade } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    return(
        <section className='contact'>
            <Container>
                <Row>
                    <Col>
                        <div className="headercontent__container">
                            <div className="headercontent__header">
                                <Fade cascade triggerOnce direction="up"> 
                                <div className='headercontent__header__content'>
                                    <h3 className="text--subtitle text--primary fst-italic">
                                        {t('contact-title')}
                                    </h3>
                                </div>  
                                <div className="headercontent__content mb-4">
                                    <p className="text--lead text-uppercase text--primary">
                                        {t('contact-subtitle')}
                                    </p>    
                                </div>
                                <div className="headercontent__content mb-3">
                                    <a className="btn btn--whats" target="__blank" href="https://wa.me/14374403777/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20comida%20mexiana">{t('contact-btn-01')}</a>
                                </div>
                                <div className='headercontent__content'>
                                    <a className="btn btn--face" target="__blank" href="https://www.facebook.com/profile.php?id=61565309242005">{t('contact-btn-02')}</a>
                                </div>
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