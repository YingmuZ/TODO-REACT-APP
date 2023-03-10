import React, {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import Todo from "./Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`

}

function App() {
  const [todos, setTodos] = useState(["Prepare for side projects", "Finish the practicing projects"])

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TODO APP</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="ADD TODO" />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}          
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
