import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const nav=useNavigate()
  const handleLogin = async (e) => {
  e.preventDefault();
  
  try {
    const res = await axios.post("http://localhost:8080/api/users/login", {
      email,
      password
    });
    localStorage.setItem("user", JSON.stringify(res.data));
    setMessage("Login successful!");
    nav('/')
  } catch (err) {
    setMessage("Invalid email or password.");
  }
};


  return (<>
  <AppNavbar/>
    <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
      <h3>Login</h3>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group>
          <Form.Label>Email/Username</Form.Label>
          <Form.Control type="text" onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">Login</Button>
      </Form>
    </Container></>
  );
};
