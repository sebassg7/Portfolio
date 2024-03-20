import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import { projects1, projects2 } from '../data';
// import colorSharp2 from '../assets/img/color-sharp2.png';


export const Projects = () => {

  return (
    <section className="project" id="project" >
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>In this section I have the privilege of presenting some of my projects that I have carried out in my career as a web developer.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                    </Nav>
                    
                    <Tab.Content>
                        <Tab.Pane eventKey="first" >
                            <Row >
                                {
                                    projects1.map( ( project, index ) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    } )
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row >
                                {
                                    projects2.map( ( project, index ) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}/>
                                        )
                                    } )
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third"></Tab.Pane>
                    </Tab.Content>

                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        {/* <img className="background-image-rigth" src={ colorSharp2 } /> */}
    </section>
    
  )
}
