import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import appStyles from "../../App.module.css";
import styles from "../../styles/PinnedPage.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { Container, Form } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/data";
import Pin from "./Pin";
import Masonry from "react-masonry-css";
import Spinner from "../../components/Spinner";

function PinnedPage({ message, filter = "" }) {
  const [pin, setPin] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPin = async () => {
      try {
        const { data } = await axiosReq.get(`/pins/?${filter}search=${query}`);
        setPin(data);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };
    setLoading(false);
    const timer = setTimeout(() => {
      fetchPin();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <>Popular profiles mobile</>
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <div className={styles.InputWrapper}>
            <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form.Control
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="text"
              placeholder="Search pin"
            />
          </div>
        </Form>

        {loading ? (
          <Masonry
            breakpointCols={{
              default: 3,
              1100: 2,
              700: 1,
            }}
            className={styles.MasonryGrid}
            columnClassName={styles.MasonryGridColumn}
          >
            {pin.results.map((pin) => (
              <Pin key={pin.id} {...pin} setPin={setPin} />
            ))}
          </Masonry>
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
