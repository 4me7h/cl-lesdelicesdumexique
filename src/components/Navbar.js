import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"

import { useState } from "react";
import {Link} from 'react-scroll';
import {useTranslation} from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();

    const [visible, setVisible] = useState(true);
    const toggleNavbar = () => {
        setVisible(!visible);
    }

    return (
        <nav className="navBar">
            <Container>
                <Row>
                    <Col>
                        <div className="navBar__container">
                            <div className="navBar__col">
                                <Link href="#" to="hero" smooth={true} duration={500} className="navBar__brand">{t('nav-title')}</Link>
                            </div>
                            <div className="navBar__col">
                                <button className="navBar__toggle" onClick={toggleNavbar}>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                    <span className="navBar__toggle__icon"></span>
                                </button>
                            </div>
                            <div className="navBar__col">
                                <ul className={`navBar__nav ${visible ? 'visible' : ''}`}>
                                    <li className="navBar__nav__item"><Link href="#" to="hero" smooth={true} duration={500}  activeClassName="active">{t('nav-home')}</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="about" smooth={true} duration={500}>{t('nav-about')}</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="menufood" smooth={true} duration={500}>{t('nav-menu')}</Link></li>
                                    <li className="navBar__nav__item"><Link href="#" to="contact" smooth={true} duration={500}>{t('nav-contact')}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    ) 
}
export default Navbar;