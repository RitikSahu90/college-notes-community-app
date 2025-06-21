import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: '100%'}} className="p-4 shadow">
        <h3 className="mb-4 text-center">Contact Us</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Type your message here..." required />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};
