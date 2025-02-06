import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgBackground from '../images/img-01.jpg';

import { Zoom } from 'react-awesome-reveal';
import { useParallax } from 'react-scroll-parallax';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const backgroundImage = `url(${imgBackground})`;
    const { ref } = useParallax({ speed: 10 });

    const { t, i18n } = useTranslation();
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <section className="hero--img" style={{backgroundImage: `${backgroundImage}`}}>
            <div className="hero__overlay"></div>
            <Container>
                <Row>
                    <Col>
                        <div ref={ref} className="hero__content">
                            <div className='hero__content__header'>
                                <ul className="translation__list">
                                    <li className="translation__item">
                                        <button className="translation__button translation__button--fr" onClick={() => changeLanguage('fr')}>Français</button>
                                    </li>
                                    <li className="translation__item">
                                        <button className="translation__button translation__button--es" onClick={() => changeLanguage('es')}>Español</button>
                                    </li>
                                    <li className="translation__item">
                                        <button className="translation__button translation__button--en" onClick={() => changeLanguage('en')}>English</button>
                                    </li>
                                </ul> 
                                <Zoom triggerOnce cascade>
                                    <p className='text--small text--white'>{t('home-small')}</p>
                                    <h1 className="text--title text--white">{t('home-title')}</h1>
                                    <h2 className="text--subtitle text--white">{t('home-subtitle-01')}<br />{t('home-subtitle-02')}</h2>
                                    <p className='text--body text--white'>{t('home-content')}</p>
                                    <a className="btn btn--primary" target="__blank" href="https://wa.me/14374403777/?text=Podría%20darme%20más%20información%20sobre%20los%20paquetes%20de%20comida%20mexiana">{t('home-cta')}</a>
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