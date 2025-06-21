import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navi=useNavigate()
  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:8080/api/users', {
      user,
      email,
      password,
      username,
    });
    setMessage("Registration successful! Now login.");

    navi('/login')
  } catch (err) {
    setMessage("Registration failed.");
  }
};

  return (
    <>
    <AppNavbar />
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
          <h3>Register</h3>
          {message && <Alert variant="info">{message}</Alert>}
          <Form onSubmit={handleRegister}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={user} onChange={e => setUser(e.target.value)} required />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mt-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
              </Form.Group>
              <Button className="mt-3" variant="success" type="submit">Register</Button>
          </Form>
    </Container>
    </>
  );
};

