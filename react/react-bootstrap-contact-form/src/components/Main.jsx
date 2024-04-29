import React from 'react'
import NavBar from './NavBar'
import { Col, Container, Row } from 'react-bootstrap'
import ImageCard from './ImageCard'

const Main = () => {
  return (
    <div>
      <NavBar/>
      <Container className="d-flex justify-content-center mt-5">
      <input type="button" value="Portfolio" className="btn btn-primary"></input>
      </Container>
      <h4 align="center" className="mt-5">Check Our Portfolio</h4>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        tenetur quibusdam dolorum vel beatae facilis architecto quasi amet
        laborum saepe
      </p>
      <Container>
        <Row lg={4}>
       <Col>
       <ImageCard
          image="https://images.unsplash.com/photo-1713365829670-d8df1e593248?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8"
     />
       </Col>
<Col>
      <ImageCard  
          image="https://media.istockphoto.com/id/1451088545/photo/purified-water-pouring-in-drinking-glass-on-rock-at-forest.webp?b=1&s=170667a&w=0&k=20&c=Cp9bkX4zUIdmtLzQ27rG1BWf6p3gu-JB64XUraMt0M0="
    />
</Col>
<Col>
        <ImageCard 
          image="https://images.unsplash.com/photo-1713623840285-0c6447ae2d16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
        />
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
