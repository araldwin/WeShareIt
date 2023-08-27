import React from "react";
import styles from "../../styles/Pin.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Pin = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    loves_count,
    love_id,
    title,
    content,
    image,
    updated_at,
    pinPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Pin}>
      <Card.Body className={`${styles.noBottomPadding} p-1`}>
        <Media className="align-items-center justify-content-between">
          <Link
            to={`/profiles/${profile_id}`}
            className="d-flex align-items-center"
          >
            <Avatar src={profile_image} height={80} />
            <div className="d-flex flex-column ml-2">
              <span className="font-weight-bold">{owner}</span>
              <span className="small text-muted">{updated_at}</span>
            </div>
            {is_owner && pinPage && "..."}
          </Link>
        </Media>
      </Card.Body>

      <Card.Body className="p-1 m-2">
        {title && (
          <Card.Title className="font-weight-bold m-0">{title}</Card.Title>
        )}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      <Link to={`/pins/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>

      <div className={`d-flex justify-content-between ${styles.PostBar} p-1`}>
        <div className="d-flex align-items-center ml-2">
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't love your own pin</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : love_id ? (
            <span onClick={() => {}}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to love pins!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className={`ml-1 ${styles.LoveCount}`}>{loves_count}</span>
        </div>

        <div className="d-flex align-items-center p-1 m-2">
          <Link to={`/pins/${id}`} className="mr-2">
            <i className="far fa-comments" />
          </Link>
          <span className={`mr-1 ${styles.CommentCount}`}>
            {comments_count}
          </span>
          <span className={styles.CommentText}>Comments</span>
        </div>
      </div>
    </Card>
  );
};

export default Pin;
