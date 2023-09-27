import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PinCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

import Alert from "react-bootstrap/Alert";
import { Image } from "react-bootstrap";
import { categories } from "../../utils/data";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function CreatePin() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [pinData, setPinData] = useState({
    title: "",
    content: "",
    destination: "",
    category: "",
    image: "",
  });
  const { title, content, destination, category, image } = pinData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPinData({
      ...pinData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPinData({
        ...pinData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("destination", destination);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/pins/", formData);
      history.push(`/pins/${data.id}`);
    } catch (err) {
   
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group className="d-flex flex-column gap-4 gap-lg-6 mt-5 w-100">
        <Form.Control
          className={`border-0 border-bottom border-gray-200 py-2 ${styles.customUnderlineBorder}`}
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Add your title here"
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control
          className={`border-0 border-bottom border-gray-200 py-2 ${styles.customUnderlineBorder}`}
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
          placeholder="Tell everyone what your Pin is about"
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Control
          className={`border-0 border-bottom border-gray-200 py-2 ${styles.customUnderlineBorder}`}
          type="url"
          name="destination"
          value={destination}
          onChange={handleChange}
          placeholder="Add a destination link"
        />
      </Form.Group>
      {errors?.destination?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group controlId="category">
        <Form.Label className="font-weight-bold float-left p-1 h6">
          Choose Pin Category
        </Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="others" className="text-lg text-dark bg-white">
            Select Category
          </option>
          {categories.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.category?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} ${btnStyles.Bright}`}
        type="submit"
      >
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mt-4">
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Container className={`${styles.customContainer}`}>
              <Form.Group className="text-center">
                {image ? (
                  <>
                    <figure>
                      <Image className={appStyles.Image} src={image} rounded />
                    </figure>
                    <div>
                      <Form.Label
                        className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                        htmlFor="image-upload"
                      >
                        Change the image
                      </Form.Label>
                    </div>
                  </>
                ) : (
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset src={Upload} message="Click or tap upload" />
                  </Form.Label>
                )}

                <Form.File
                  id="image-upload"
                  accept="image/*"
                  onChange={handleChangeImage}
                  ref={imageInput}
                />

                <p className="mt-32 text-muted">
                  Use high-quality JPG, SVG, PNG GIF less than 20MB
                </p>
              </Form.Group>
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <div className="d-md-none">{textFields}</div>
            </Container>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePin;
