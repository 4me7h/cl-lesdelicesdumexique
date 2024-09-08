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
                                    text = " Tortilla frita con frijoles, queso amarillo americano, queso blanco, Cheddar, jalapeño"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Chilaquiles"
                                    subtitle = "Náhuatl, México precolombino"
                                    text = "Tortilla frita bañada de salsa de su elección, verde o roja con queso, crema"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Enchiladas"
                                    subtitle = "Náhuatl, México precolombino"
                                    text = "Tortillas rellenas de queso glaseada de salsa verde o roja, cebolla morada, y pechuga de pollo, queso, crema."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Burro"
                                    subtitle = "Chihuahua, México"
                                    text = "Tortilla de harina, untada de frijol, con queso, poco de gallo y cebolla. Opción de proteína"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tostadas"
                                    subtitle = "Oaxaca, México"
                                    text = "Tortilla frita con frijol untado, pollo a la plancha lechuga con queso y crema."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Papas fritas"
                                    subtitle = "Putin (Québec)"
                                    text = "Papas fritas bañadas de gravy y queso."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Papas fritas"
                                    subtitle = "Estilo mexicano (Chiapas)"
                                    text = "Papas fritas con aderezo de la casa."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Alas de pollo"
                                    subtitle = "Nueva York"
                                    text = "BBQ, Buffalo, Mango Habanero"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tacos"
                                    subtitle = "México, Prehispánico"
                                    text = "Tortilla de Maíz suave con proteína de su elección, cebolla y cilantro."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Quesadilla"
                                    subtitle = "Veracruz, México"
                                    text = "Tortilla de harina suave con queso y proteína al gusto, cebolla y cilantro."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Empanadas"
                                    subtitle = "Chiapas, México"
                                    text = "Tortilla de maíz nixtamalizada rellena de queso, pollo o queso con champiñones, bañada en salsa roja de tomate con repollo, zanahoria y chile en curtido, glaseado de crema con queso."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Tacos dorados"
                                    subtitle = "Sinaloa, México"
                                    text = "Proteína envuelta con una tortilla, frita, bañada en salsa roja, con repollo, zanahoria y chiles en curtido, queso y crema."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Grilladas"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "A la plancha sazonadas con especias de la casa."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Grilladas de la casa"
                                    subtitle = "México, Canadá"
                                    text = "Sazonado estilo mexicano"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Sandwich"
                                    subtitle = "Salaberry de Villeyfield"
                                    text = "Clásico Pan blanco con tomate, cebolla, mostaza y Grilladas."
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Boneless"
                                    subtitle = "New York"
                                    text = " Trocitos de pechuga de pollo, sin hueso, empanizados y pueden ser aderezados o bañadosen una deliciosa salsa de su elección (Mango Habanero, Buffalo, BBQ)"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Postres"
                                    subtitle = "México"
                                    text = "Ensalada de Manzana,Arroz con leche, Gelatina mosaico, Champirrado"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Proteínas"
                                    subtitle = "México"
                                    text = "Pollo, Res, Grilladas, Chorizo (puerco), Campechano, Cochito (Puerco), Barbacoa (Res), Champiñones"
                                />
                            </li>
                            <li className="menufood__item">
                                <ItemMenu 
                                    title = "Extras"
                                    subtitle = "México"
                                    text = "Pico de gallo, Guacamole, Queso, Crema, Proteína, Grilladas"
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