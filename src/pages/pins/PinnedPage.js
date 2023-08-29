import Pin from "./Pin";
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";

import Spinner from "../../components/Spinner";
import { axiosReq } from "../../api/axiosDefaults";
import { Container } from "react-bootstrap";

function PinnedPage({ message, filter = "" }) {
  const [pins, setPins] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const { data } = await axiosReq.get(`/pins/?${filter}`);
        setPins(data);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(false);
    fetchPins();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <>Popular profiles mobile</>
        {loading ? (
          <>
            {pins.results.length ? (
              pins.results.map((pin) => (
                <Pin key={pin.id} {...pin} setPins={setPins} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Spinner message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default PinnedPage;
