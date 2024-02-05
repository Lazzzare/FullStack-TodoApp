import axios from "axios";
import { useEffect, useState } from "react";
import types from "./types";
import Header from "./components/Header";
import Input from "./components/Input";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState<types[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://fullstack-todoapp-4od8.onrender.com/")
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
      <div className="w-[327px] md:w-[540px] mx-auto">
        <Input darkMode={darkMode} setTodos={setTodos} />
        <Todos todos={todos} darkMode={darkMode} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
