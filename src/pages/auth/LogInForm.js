import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import shareVideo from "../../assets/share.mp4";
import Container from "react-bootstrap/Container";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import SignUpForm from "./SignUpForm";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/data";

function LogInForm() {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = logInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>Log in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className={styles.Label}>Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password">
              <Form.Label className={styles.Label}>Password</Form.Label>
              <div className={styles.PasswordInputContainer}>
                <Form.Control
                  className={styles.Input}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <span
                  className={styles.PasswordToggleIcon}
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </span>
              </div>
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign in
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <div className={styles.Link}>
            Don't have an account? <SignUpForm />
          </div>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.LogInCol}`}
      >
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          autoPlay
          className={`${appStyles.FillerVideo}`}
        />
      </Col>
    </Row>
  );
}

export default LogInForm;
