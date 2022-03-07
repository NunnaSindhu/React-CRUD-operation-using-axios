import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Update({ setApiData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem("Id"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setCheckbox(localStorage.getItem("checkbox"));
  }, []);
  console.log(id, firstName, lastName, checkbox);
  const updateAPIData = () => {
    axios
      .put(`https://61ea3a257bc0550017bc65e1.mockapi.io/axios/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <Form className="form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(!checkbox);
          }}
        />
      </Form.Field>
      <Button type="submit" onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  );
}
