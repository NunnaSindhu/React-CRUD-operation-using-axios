import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import Update from "./Update";

const Create = ({ flag, apiData, setApiData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = (event) => {   
    axios
      .post("https://61ea3a257bc0550017bc65e1.mockapi.io/axios", {
        firstName,
        lastName,
        checkbox,
      })
      .then((res) => {
        setApiData([...apiData, res.data]);
      });
      setFirstName("");
      setLastName("");
      setCheckbox(false);
  };
  if (flag) {
    return <Update apiData={apiData} setApiData={setApiData}/>;
  }
  return (
    <Form className="form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => {
            setCheckbox(!checkbox);
          }}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
