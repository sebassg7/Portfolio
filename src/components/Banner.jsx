import { useEffect, useState } from 'react';

import headerImg from '../assets/img/header-img.svg'

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState( 0 );
    const [isDeleting, setIsDeleting] = useState( false );
    const toRotate = ["Web Developer", "Frontend Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState( 300 - Math.random() * 100 );
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval( () => {
            tick();
        }, delta )

        return () => { clearInterval( ticker ) }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring( 0, text.length - 1 ) : fullText.substring( 0, text.length + 1 );
    
        setText( updatedText );

        if( isDeleting ){
            setDelta( prevDelta => prevDelta/2 )
        }

        if( !isDeleting && updatedText === fullText ){
            setIsDeleting( true );
            setDelta( period );
        } else if ( isDeleting && updatedText === ''){
            setIsDeleting( false );
            setLoopNum( loopNum + 1 );
            setDelta( 500 );
        }
    };

    const scrollToSection = () => {
        const section = document.getElementById('connect'); 
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
                <Col xs={ 12 } md={ 6 } xl={ 7 }>
                    <span className='tagline' >Hi, everyone!</span>
                    <h1>{ `I'm Sebastián ` } <span className="wrap">{text}</span></h1>
                    <p>Frontend developer, with the purpose of provide value with commitment to technological projects.</p>
                    <button onClick={ scrollToSection }>Let's connect <ArrowRightCircle size={25}/></button>
                </Col>

                <Col xs={ 12 } md={ 6 } xl={ 7 }>
                        <img src={ headerImg } alt="Headder Img"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}


