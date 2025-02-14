import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemMenu from './ItemMenu';

import { useTranslation } from 'react-i18next';

import nachos from '../images/menu/nachos.jpg';
import chilaquiles from '../images/menu/chilaquiles.jpg';
import enchiladas from '../images/menu/enchiladas.jpg';
import burritos from '../images/menu/burritos.jpg';
import tostadas from '../images/menu/tostadas.jpg';
import papasfritas from '../images/menu/papas-fritas.jpg';
import papasfritasca from '../images/menu/papas-fritas-ca.jpg';
import wings from '../images/menu/wings.jpg';
import tacos from '../images/menu/tacos.jpg';
import quesadillas from '../images/menu/quesadillas.jpg';
import empanadas from '../images/menu/empanadas.jpg';
import tacosdorados from '../images/menu/tacos-dorados.jpg';
import grilladas from '../images/menu/grilladas.jpg';
import grilladasca from '../images/menu/grilladas-ca.jpg';
import sandwich from '../images/menu/sandwich.jpg';
import boneless from '../images/menu/boneless.jpg';
import postres from '../images/menu/postres.jpg';
import proteinas from '../images/menu/proteinas.jpg';
import extras from '../images/menu/extras.jpg';

const MenuFood = () => {

    const { t } = useTranslation();

    return (
        <section className="menufood">
            <Container>
                <Row>
                    <Col>
                        <div className='menufood__header'>
                            <div className="menufood__header__content">
                                <h2 className='text--subtitle text-center text-uppercase text--primary fst-italic menufood__header__title'>{t('menu-title')}</h2>
                            </div>
                        </div>
                        <ul className='menufood__list'>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {tacos}
                                    title = {t('menu-title-01')} // "Tacos"
                                    subtitle = {t('menu-subtitle-01')}
                                    text = {t('menu-text-01')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {quesadillas}
                                    title = {t('menu-title-02')} // "Quesadilla"
                                    subtitle = {t('menu-subtitle-02')}
                                    text = {t('menu-text-02')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {nachos}
                                    title = {t('menu-title-03')} // "Nachos"
                                    subtitle = {t('menu-subtitle-03')}
                                    text = {t('menu-text-03')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {chilaquiles}
                                    title = {t('menu-title-04')} // "Chilaquiles"
                                    subtitle = {t('menu-subtitle-04')}
                                    text = {t('menu-text-04')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {enchiladas}
                                    title = {t('menu-title-05')} // "Enchiladas"
                                    subtitle = {t('menu-subtitle-05')}
                                    text = {t('menu-text-05')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {burritos}
                                    title = {t('menu-title-06')} // "Burritos"
                                    subtitle = {t('menu-subtitle-06')}
                                    text = {t('menu-text-06')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {tostadas}
                                    title = {t('menu-title-07')} // "Tostadas"
                                    subtitle = {t('menu-subtitle-07')}
                                    text = {t('menu-text-07')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {papasfritas}
                                    title = {t('menu-title-08')} // "Poutine"
                                    subtitle = {t('menu-subtitle-08')}
                                    text = {t('menu-text-08')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {papasfritasca}
                                    title = {t('menu-title-09')} // "Poutine"
                                    subtitle = {t('menu-subtitle-09')}
                                    text = {t('menu-text-09')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {wings}
                                    title = {t('menu-title-10')} // "Wings"
                                    subtitle = {t('menu-subtitle-10')}
                                    text = {t('menu-text-10')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {empanadas}
                                    title = {t('menu-title-11')} // "Empanadas"
                                    subtitle = {t('menu-subtitle-11')}
                                    text = {t('menu-text-11')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {tacosdorados}
                                    title = {t('menu-title-12')} // "tacos-dorados"
                                    subtitle = {t('menu-subtitle-12')}
                                    text = {t('menu-text-12')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {grilladas}
                                    title = {t('menu-title-13')} // "grillades"
                                    subtitle = {t('menu-subtitle-13')}
                                    text = {t('menu-text-13')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {grilladasca}
                                    title = {t('menu-title-14')} // "grillades-casa"
                                    subtitle = {t('menu-subtitle-14')}
                                    text = {t('menu-text-14')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {sandwich}
                                    title = {t('menu-title-15')} // "sandwich"
                                    subtitle = {t('menu-subtitle-15')}
                                    text = {t('menu-text-15')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {boneless}
                                    title = {t('menu-title-16')} // "boneless"
                                    subtitle = {t('menu-subtitle-16')}
                                    text = {t('menu-text-16')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {postres}
                                    title = {t('menu-title-17')} // "postres"
                                    subtitle = {t('menu-subtitle-17')}
                                    text = {t('menu-text-17')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {proteinas}
                                    title = {t('menu-title-18')} // "proteinas"
                                    subtitle = {t('menu-subtitle-18')}
                                    text = {t('menu-text-18')}
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {extras}
                                    title = {t('menu-title-19')} // "extras"
                                    subtitle = {t('menu-subtitle-19')}
                                    text = {t('menu-text-19')}
                                />
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MenuFood;