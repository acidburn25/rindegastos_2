import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputEmpty, setInputEmpty] = useState(true);
  const [values, setValues] = useState({
    birthday: "",
  });
  const [data, setData] = useState("");
  const getDaysUntilMyBirthday = () => {
    axios
      .get("http://localhost:5000/datediff?birthday=" + values.birthday)
      .then((response) => {
        setData(response.data); //Pendiente manejar el error
      });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  useEffect(() => {
    if (values.birthday !== "") {
      setInputEmpty(false);
    }
  }, [inputEmpty, values.birthday]);

  return (
    <>
      <div className="container">
        <div className="inputs-container">
          <input
            placeholder="Fecha de cumpleaños"
            value={values.birthday}
            onChange={handleChange("birthday")}
          ></input>
        </div>
        <div className="button">
          <button
            onClick={getDaysUntilMyBirthday}
            disabled={inputEmpty ? true : false}
          >
            Enviar
          </button>
        </div>
      </div>
      <div className="data">{data ? <div>La cantidad de días que falta para mi cumpleaños es: {data}</div> : null}</div>
    </>
  );
}

export default App;