import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function PinPage() {
  const { id } = useParams();
  const [pin, setPin] = useState({ results: [] }); // Use the correct state structure

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: pin }] = await Promise.all([
          axiosReq.get(`/pins/${id}`),
        ]);
        setPin({ results: [pin] });
        console.log(pin);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <p>Popular profiles for mobile</p>
        <p>Pin component</p>
        <Container className={appStyles.Content}>Comments</Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PinPage;
