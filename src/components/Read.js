import React, { useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";

export default function Read({ setFlag,apiData,setApiData }) {
  // const [apiData, setApiData] = useState([]);

  //Read data from API
  useEffect(() => {
    axios.get("https://61ea3a257bc0550017bc65e1.mockapi.io/axios")
      .then((response) => setApiData(response.data))
      .catch((e) => console.log(e));
  }, [setApiData]);
  console.log(apiData);

  const getData = () => {
    axios.get(`https://61ea3a257bc0550017bc65e1.mockapi.io/axios`).then(
      (getData) => {
        setApiData(getData.data);
      }
    );
  };
  //Delete data from api
  const deleteFun = (id) => {
    axios.delete(
      `https://61ea3a257bc0550017bc65e1.mockapi.io/axios/${id}`
    ).then(() => {
      getData();
    });
  };
  //post the data in localStorage using updateData function
  const updateData = (data) => {
    console.log(data);
    //get the data using object destructuring
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("Id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("checkbox", checkbox);
  };
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>FirstName</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? "checked" : "unchecked"}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    setFlag((prev) => !prev);
                    updateData(data);
                  }}
                >
                  Update
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => {
                    deleteFun(data.id);
                  }}
                >
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
