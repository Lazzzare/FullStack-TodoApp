import axios from "axios";
import { useEffect, useState } from "react";
import types from "./types";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState<types[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  console.log(todos);

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
    <div
      className={`w-full min-h-screen flex flex-col ${
        darkMode ? "bg-[#171823]" : "bg-white"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Input darkMode={darkMode} />
      <Todos todos={todos} darkMode={darkMode} setTodos={setTodos} />
    </div>
  );
};

export default App;
