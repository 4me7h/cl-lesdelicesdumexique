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
                                <h2 className='text--subtitle text-center text-uppercase text--primary fst-italic menufood__header__title'>Notre menu</h2>
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
                                    title = "Burritos"
                                    subtitle = "Chihuahua, México"
                                    text = "Tortilla de farine, tartinée de haricots, avec du fromage, un peu de pico de gallo et des oignons. Option de protéine."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {tostadas}
                                    title = "Tostadas"
                                    subtitle = "Oaxaca, México"
                                    text = "Tortilla frite avec des haricots tartinés, poulet grillé, laitue avec du fromage et de la crème."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {papasfritas}
                                    title = "Papas fritas"
                                    subtitle = "Putin (Québec)"
                                    text = "Frites nappées de sauce gravy et de fromage."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {papasfritasca}
                                    title = "Papas fritas"
                                    subtitle = "Estilo mexicano (Chiapas)"
                                    text = "Frites avec la sauce maison."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {wings}
                                    title = "Wings"
                                    subtitle = "Nueva York"
                                    text = "BBQ, Buffalo, Mangue Habanero"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {empanadas}
                                    title = "Empanadas"
                                    subtitle = "Chiapas, México"
                                    text = "Tortilla de maïs nixtamalisée farcie de fromage, poulet ou fromage avec champignons, nappée de sauce rouge à base de tomate avec chou, carottes et piments en pickles, glacée de crème et de fromage."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {tacosdorados}
                                    title = "Tacos dorados"
                                    subtitle = "Sinaloa, México"
                                    text = "Protéine enveloppée dans une tortilla, frite, nappée de sauce rouge, avec chou, carottes et piments en pickles, fromage et crème."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {grilladas}
                                    title = "Grillades"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "Grillées et assaisonnées avec les épices maison."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {grilladasca}
                                    title = "Grillades de la casa"
                                    subtitle = "México, Canadá"
                                    text = "Assaisonné à la manière mexicaine."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {sandwich}
                                    title = "Sandwich"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "Pain blanc classique avec tomate, oignon, moutarde et grillé."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {boneless}
                                    title = "Boneless"
                                    subtitle = "New York"
                                    text = "Petits morceaux de poitrine de poulet, sans os, panés et pouvant être assaisonnés ou nappés d'une délicieuse sauce de votre choix (Mangue Habanero, Buffalo, BBQ)."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {postres}
                                    title = "Postres"
                                    subtitle = "México"
                                    text = "Salade de pommes, riz au lait, gelée mosaïque, champurrado."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {proteinas}
                                    title = "Proteínas"
                                    subtitle = "México"
                                    text = "Poulet, bœuf, grillé, chorizo (porc), campechano, cochito (porc), barbacoa (bœuf), champignons."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    imagemenu = {extras}
                                    title = "Extras"
                                    subtitle = "México"
                                    text = "Pico de gallo, Guacamole, Fromage, Crème, Protéine, Grillé."
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