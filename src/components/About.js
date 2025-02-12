import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Gridimg from './Gridimg';
import { Fade } from 'react-awesome-reveal';

import { useTranslation } from 'react-i18next';

const imagePaths = [  
  require('../images/img-02.jpg'),
  require('../images/img-01.jpg'),
  require('../images/img-03.jpg'),
  require('../images/img-12.jpg'),
  require('../images/img-05.jpg'),
  require('../images/img-24.jpg'),
  require('../images/img-15.jpg'),
  require('../images/img-27.jpg'),
];

const About = () => {

  const { t } = useTranslation();
   
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
                      <h3 className="text--subtitle text-center text-uppercase text--ff-s">
                        <em>{t('about-title')}</em>
                      </h3>
                    </div>  
                    <div className="about__header__content">
                      <p className='text--body text--white text-center'>
                        {t('about-content')}
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
                {t('about-content-02')}
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