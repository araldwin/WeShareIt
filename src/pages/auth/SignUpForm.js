import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { BsEye, BsEyeSlash } from "react-icons/bs"; // Import eye icons
import logo from "../../assets/favicon.png";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = (props) => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      handleClose();
      history.push("/login");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <>
      <button onClick={handleShow} className={styles.signUpButton}>
        <div>Sign Up</div>
      </button>

      <Modal
        show={showModal}
        onHide={handleClose}
        className={styles.CustomModalContent}
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className={styles.Header}>
          <div className={styles.Header}>Sign up</div>
        </Modal.Header>

        <Modal.Body className={`mx-auto ${styles.Container}`}>
          <img src={logo} alt="logo" height={40} className={styles.Logo} />
          <h1 className={styles.Header}>Welcome to WeShare-it</h1>
          <p className="text-center">Share new ideas to everyone</p>

          <Form onSubmit={handleSubmit} className={`mt-4 ${styles.Form}`}>
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

            {/* password fields */}
            <Form.Group controlId="password1">
              <Form.Label className={styles.Label}>Password</Form.Label>
              <div className={styles.PasswordInputContainer}>
                <Form.Control
                  className={styles.Input}
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Create a password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
                <span
                  className={styles.PasswordToggleIcon}
                  onClick={togglePasswordVisibility1}
                >
                  {showPassword1 ? <BsEyeSlash /> : <BsEye />}
                </span>
              </div>
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className={styles.Label}>Confirm password</Form.Label>
              <div className={styles.PasswordInputContainer}>
                <Form.Control
                  className={styles.Input}
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
                <span
                  className={styles.PasswordToggleIcon}
                  onClick={togglePasswordVisibility2}
                >
                  {showPassword2 ? <BsEyeSlash /> : <BsEye />}
                </span>
              </div>
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Continue
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert variant="warning" key={idx} className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Modal.Body>
        <Modal.Footer className={`mt-3 ${appStyles.Content}`}>
          <Link
            className={styles.Link}
            to="/login"
            onClick={() => {
              handleClose();
            }}
          >
            Already have an account? <span>Log in</span>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpForm;
