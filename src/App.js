import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";

import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);
  const [apiData, setApiData] = useState([]);
  return (
    <div className="container">
      <h1>CRUD Opeartion Using Axios</h1>
      <div className="main">
        <div>
          <Create flag={flag} apiData={apiData} setApiData={setApiData} />
        </div>
        <div>
          <Read setFlag={setFlag} apiData={apiData} setApiData={setApiData} />{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
