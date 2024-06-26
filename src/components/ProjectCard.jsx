import { Col, Nav } from 'react-bootstrap';

export const ProjectCard = ( {title, description, imgUrl, githubURL} ) => {
  return (

    
        <Col sm={ 6 } md={ 4 }>
          <Nav.Link href={githubURL} target="_blank">
              <div className="proj-imgbx">
                  <img src={ imgUrl }/>
                  <div className='proj-txtx' >
                      <h4 >{ title }</h4>
                      <span>{ description }</span>
                  </div>
              </div>
          </Nav.Link>
        </Col>
    
    
  )
}
