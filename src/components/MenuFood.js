import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemMenu from './ItemMenu';


const MenuFood = () => {
    return (
        <section className="menufood">
            <Container>
                <Row>
                    <Col>
                        <div className='menufood__header'>
                            <div className="menufood__header__content">
                                <h2 className='text--subtitle text-center text-uppercase text--primary'>Notre menu</h2>
                            </div>
                        </div>
                        <ul className='menufood__list'>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Nachos"
                                    subtitle = "Coahuila, México"
                                    text = "Tortilla frite avec des haricots, fromage américain jaune, fromage blanc, cheddar, jalapeño"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Chilaquiles"
                                    subtitle = "Náhuatl, México precolombino"
                                    text = "Tortilla frite nappée de sauce de votre choix, verte ou rouge, avec du fromage et de la crème"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Enchiladas"
                                    subtitle = "Náhuatl, México precolombino"
                                    text = "Tortillas farcies de fromage nappées de sauce verte ou rouge, avec oignons rouges, poitrine de poulet, fromage et crème."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Burrito"
                                    subtitle = "Chihuahua, México"
                                    text = "Tortilla de farine, tartinée de haricots, avec du fromage, un peu de pico de gallo et des oignons. Option de protéine."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tostadas"
                                    subtitle = "Oaxaca, México"
                                    text = "Tortilla frite avec des haricots tartinés, poulet grillé, laitue avec du fromage et de la crème."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Papas fritas"
                                    subtitle = "Putin (Québec)"
                                    text = "Frites nappées de sauce gravy et de fromage."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Papas fritas"
                                    subtitle = "Estilo mexicano (Chiapas)"
                                    text = "Frites avec la sauce maison."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Wings"
                                    subtitle = "Nueva York"
                                    text = "BBQ, Buffalo, Mangue Habanero"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tacos"
                                    subtitle = "México, Prehispánico"
                                    text = "Tortilla de maïs souple avec la protéine de votre choix, oignons et coriandre"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Quesadilla"
                                    subtitle = "Veracruz, México"
                                    text = "Tortilla de farine souple avec fromage et protéine au choix, oignons et coriandre."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Empanadas"
                                    subtitle = "Chiapas, México"
                                    text = "Tortilla de maïs nixtamalisée farcie de fromage, poulet ou fromage avec champignons, nappée de sauce rouge à base de tomate avec chou, carottes et piments en pickles, glacée de crème et de fromage."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tacos dorados"
                                    subtitle = "Sinaloa, México"
                                    text = "Protéine enveloppée dans une tortilla, frite, nappée de sauce rouge, avec chou, carottes et piments en pickles, fromage et crème."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Grilladas"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "Grillées et assaisonnées avec les épices maison."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Grilladas de la casa"
                                    subtitle = "México, Canadá"
                                    text = "Assaisonné à la manière mexicaine."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Sandwich"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "Pain blanc classique avec tomate, oignon, moutarde et grillé."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Boneless"
                                    subtitle = "New York"
                                    text = "Petits morceaux de poitrine de poulet, sans os, panés et pouvant être assaisonnés ou nappés d'une délicieuse sauce de votre choix (Mangue Habanero, Buffalo, BBQ)."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Postres"
                                    subtitle = "México"
                                    text = "Salade de pommes, riz au lait, gelée mosaïque, champurrado."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Proteínas"
                                    subtitle = "México"
                                    text = "Poulet, bœuf, grillé, chorizo (porc), campechano, cochito (porc), barbacoa (bœuf), champignons."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
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