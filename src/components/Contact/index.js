import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

//import from bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    //errorMessage Hook
    const [errorMessage, setErrorMessage] = useState("");

    //destructure the formstate
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log('Form', formState);
        }
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      return (
        <Form>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control required name="name" placeholder="Enter name" onBlur={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control required name="email" type="email" placeholder="name@example.com" onBlue={handleChange}/>
            </Form.Group>
            <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control required name="message" as="textarea" rows="5" placeholder="Message" onBlur={handleChange}></Form.Control>
            </Form.Group>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <Button data-testid="button" type="submit">Submit</Button>
            
        </Form>
      );

}

export default ContactForm;


{/* <section>
          <h1>Contact Me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                defaultValue={email}
                name="email"
                onBlur={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">Submit</button>
          </form>
        </section> */}