import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Alert, Button, Form, FormControl, Container } from "react-bootstrap";
import ERROR_TIMEOUT_SECONDS from "../../config";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  function _signin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log("Login Success! Signed in with user email: " + user.email);
        console.log("Full User Details: " + user);
        history.push("/home");
      })
      .catch((error) => {
        setErrorMessage("Invalid username or password, Try again.");
        setTimeout(() => setErrorMessage(null), ERROR_TIMEOUT_SECONDS * 1000);
        history.push("/signin");
      });
  }

  return (
    <Container>
      <h3 style={{paddingTop: "1 em"}}>Sign In</h3>
      <Form.Group style={{ maxWidth: "80%", margin: "auto" }}>
        <Form.Label style={{ float: "left" }}>Email:</Form.Label>
        <FormControl
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
        />
      </Form.Group>
      <Form.Group
        style={{ maxWidth: "80%", margin: "auto", marginBottom: "15px" }}
      >
        <Form.Label style={{ float: "left" }}>Password:</Form.Label>
        <FormControl
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </Form.Group>
      <Button onClick={_signin}>Sign In</Button>

      <Container>
        <Alert style={{ opacity: errorMessage ? 1 : 0 }} variant="danger">
          {errorMessage}
        </Alert>
      </Container>
    </Container>
  );
}
