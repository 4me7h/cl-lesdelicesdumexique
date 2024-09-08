import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-01.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-24.jpg'),
  require('../images/img-15.jpg'),
  require('../images/img-27.jpg'),
  require('../images/img-10.jpg'),
  require('../images/img-25.jpg'),
  require('../images/img-10.jpg'),
  require('../images/img-38.jpg'),
];

const About = () => {

  return (
    <section className="about">
      <div className="about__header">
        <Container>
          <Row>
            <Col>
              <Fade cascade triggerOnce direction="left">
                <div className="about__header__container">
                  <div className="about__header__container__column">
                    <div className='about__header__content'>
                      <h3 className="text--subtitle text-center text-uppercase text--ff-s"><em>À propos des délices du Mexique</em></h3>
                    </div>  
                    <div className="about__header__content">
                      <p className='text--body text--white text-center'>
                        Notre histoire est enracinée dans les traditions familiales de Chiapas, au Mexique. Depuis des générations, nous perpétuons l'art de la cuisine mexicaine authentique, en utilisant des recettes transmises de mère en enfants. Aujourd'hui, nous avons apporté ces saveurs uniques à Salaberry, pour que vous puissiez découvrir la richesse et la chaleur de notre culture à travers chaque plat que nous servons.
                      </p>
                    </div>
                  </div>
                </div>
                
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <Gridimg 
          imagePaths = {imagePaths}
      />
      <Container>
        <Row>
          <Col>
            <div className="about__content">
              <Fade triggerOnce>
              <p className='text--body'>
                Enracinée dans les traditions familiales de Chiapas, au Mexique, notre cuisine apporte les saveurs authentiques du Mexique directement à Salaberry. Chaque plat est un hommage à nos recettes ancestrales, transmises de génération en génération.
              </p>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;