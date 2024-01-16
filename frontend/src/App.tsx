import axios from "axios";
import { useEffect, useState } from "react";
import types from "./types";
import Header from "./components/Header";
import Input from "./components/Input";

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
    <div className="w-full min-h-screen flex flex-col bg-[#FAFAFA]">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Input />
    </div>
  );
};

export default App;
