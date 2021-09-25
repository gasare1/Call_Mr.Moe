import React, { Component, useState } from "react";
import axios from "axios";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Authorized } from "../../Helper/Context";
import { useContext } from "react";
import AdminConsole from "./AdminConsole";
import { Route } from "react-router";
export default function Admin({authorized}) {
    

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [Session, setSession] = useState("");
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password_hash: password,
      }),
    }).then((response) => {
      if (response.status == 200) {
            authorized = authorized;
            alert("Successfully Login");
            history.push("/console");
            setSession("You are Logged in. Redirecting....");

      } else {
        setSession("Wrong Credentials Please try again!!");
      }
    });
  };

  return (
    <div
      id="admin"
      style={{
        marginTop: "100px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" value="Submit">
          Login
        </Button>
        <Form.Text
          className="text-muted"
          style={{ color: "red", margin:'20px' }}
        >
          {Session}
        </Form.Text>
      </Form>
    </div>
  );
}
