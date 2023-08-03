import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Input from "./components/Input";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/useRef";
import UseImparativeHandle from "./components/useImparativeHandle";
import UseContext from "./components/UseContext";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cards = data.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      title={item.title}
      completed={item.completed ? "Completed" : "Incomplete"}
    />
  ));

  return (
    <div className="App">
      <h2>-- UseState --</h2>
      <br />
      <Input />
      <br />
      <h2>-- UseReducer --</h2>
      <br />
      <UseReducer />
      <br />
      <h2>-- UseRef --</h2>
      <br />
      <UseRef />
      <br />
      <h2>-- UseImparativeHandle --</h2>
      <br />
      <UseImparativeHandle />
      <br />
      <h2>-- UseContext --</h2>
      <br />
      <UseContext />
      <br />
      <h1>Books</h1>
      <div className="cards d-flex flex-column gap-4">{cards}</div>
    </div>
  );
}

export default App;
