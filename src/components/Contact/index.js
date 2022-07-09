import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

//import from bootstrap
import { Form, Button, Container, Row } from "react-bootstrap";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //errorMessage Hook
  const [errorMessage, setErrorMessage] = useState("");

  //destructure the formstate
  // const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  }

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  }

  return (
    <section id="contact">
      <Container>
        <Row>
          <h1 className="title" style={{ textAlign: "center" }}>
            Let's Connect!
          </h1>
          <Form id="contact-form " onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                placeholder="Enter name"
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="name@example.com"
                onBlue={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                name="message"
                as="textarea"
                rows="5"
                placeholder="Message"
                onBlur={handleChange}
              ></Form.Control>
            </Form.Group>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <br></br>
            <Button data-testid="button" type="submit" variant="secondary">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
