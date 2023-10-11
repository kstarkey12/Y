import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Container>
      <Row className="home">
        <Col md={{ span: 6, offset: 3 }}>{
          <h1>Welcome to y?</h1>
        }
        </Col>
      </Row>
    </Container>
  );
}


export default Home;