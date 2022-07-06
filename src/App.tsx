import { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Что сделать?" />
          <input type="number" placeholder="За какой срок сделать" />
        </div>
        <button>Добавить задачу</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
