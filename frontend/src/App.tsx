import axios from "axios";
import { useEffect, useState } from "react";
import types from "./types";
import Header from "./components/Header/Header";

const App = () => {
  const [todos, setTodos] = useState<types[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
    </div>
  );
};

export default App;
