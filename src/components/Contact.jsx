import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import contactImg1 from '../assets/img/contact-img1.svg';
import contactImg2 from '../assets/img/contact-img2.svg';

export const Contact = () => {
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '20px' }}>
                                <img src={contactImg1} alt="Contact mail" style={{ width: '50px' }} />
                            </span>
                            <h3>sbssing7@gmail.com</h3>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <span style={{ marginRight: '20px' }}>
                                <img src={contactImg2} alt="Contact phone" style={{ width: '50px' }} />
                            </span>
                            <h3>+57 321 263 1948</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};