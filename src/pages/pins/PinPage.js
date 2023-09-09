import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Pin from "../pins/Pin";
import Comment from "../comments/Comment"

import CommentCreateForm from "../comments/ CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/Spinner";
import { fetchMoreData } from "../../utils/data";


function PinPage() {
  const { id } = useParams();
  const [pin, setPin] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [comments, setComments] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: pin }, {data: comments}] = await Promise.all([
          axiosReq.get(`/pins/${id}`),
          axiosReq.get(`/comments/?pin=${id}`)
        ]);
        setPin({ results: [pin] });
        setComments(comments)
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
        <Pin {...pin.results[0]} setPin={setPin} pinPage />
        <Container className={appStyles.Content}>
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              pin={id}
              setPin={setPin}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}
          {comments.results.length ? (
             <InfiniteScroll
             children={comments.results.map((comment) => (
               <Comment
                 key={comment.id}
                 {...comment}
                 setPin={setPin}
                 setComments={setComments}
               />
             ))}
             dataLength={comments.results.length}
             loader={ <Spinner />}
             hasMore={!!comments.next}
             next={() => fetchMoreData(comments, setComments)}
           />

          ) : currentUser ? (
           <span>No comments yet, be the first to comment!</span> 
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PinPage;
