import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import Spinner from "../../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import Pin from "../pins/Pin";
import { fetchMoreData } from "../../utils/data";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePins, setProfilePins] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setProfileData, handleFollow } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePins }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}`),
            axiosReq.get(`/pins/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePins(profilePins);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
    <>
      <Row noGutters className={`${styles.ProfileRow} text-center`}>
        <Col lg={3} className="text-lg-left">
          <Image
            className={`${styles.ProfileImage} rounded-circle`}
            src={profile?.image}
          />
        </Col>
        <Col lg={6} className={`${styles.ProfileInfo}`}>
          <h3 className={`${styles.ProfileName} m-2`}>{profile?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={4} className="my-2">
              <div className={`${styles.ProfileStats}`}>
                {profile?.pins_count}
              </div>
              <div className={`${styles.ProfileStatsLabel}`}>Pins</div>
            </Col>
            <Col xs={4} className="my-2">
              <div className={`${styles.ProfileStats}`}>
                {profile?.followers_count}
              </div>
              <div className={`${styles.ProfileStatsLabel}`}>Followers</div>
            </Col>
            <Col xs={4} className="my-2">
              <div className={`${styles.ProfileStats}`}>
                {profile?.following_count}
              </div>
              <div className={`${styles.ProfileStatsLabel}`}>Following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => {}}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfilePins = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s pins</p>
      <hr />
      {profilePins.results.length ? (
        <InfiniteScroll
          children={profilePins.results.map((pin) => (
            <Pin key={pin.id} {...pin} setPins={setProfilePins} />
          ))}
          dataLength={profilePins.results.length}
          loader={<Spinner />}
          hasMore={!!profilePins.next}
          next={() => fetchMoreData(profilePins, setProfilePins)}
        />
      ) : (
        <Asset
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePins}
            </>
          ) : (
            <Spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
