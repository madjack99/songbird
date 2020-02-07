import React from 'react';

import Answers from '../answers';
import Description from '../description';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = props => {
  return (
    <Container className="question">
      <Row>
        <Col>
          <Answers {...props} />
        </Col>
        <Col>
          <Description {...props} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
