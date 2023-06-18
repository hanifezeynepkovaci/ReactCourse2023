import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

export default function Film({ films }) {
  return (
    <div>
      {films.map((film, index) => (
        <Container>
          <Row>
            <Col md="12">
              <Card className="d-inline">
                <CardImg top height="400px" src={film.url} alt="Film" />
                <CardBody>
                  <CardTitle className="fw-bold" key={index}>
                    {film.title}
                  </CardTitle>
                  <CardSubtitle key={index}>
                    Gösterime Giriş Tarihi: {film.subtitle}
                  </CardSubtitle>
                  <CardText key={index}>{film.text}</CardText>
                  <Button>İzle</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
}
