import { useState } from "react";
import TodoItem  from "./components/TodoItem";
import InputArea from "./components/InputArea";


function App() {

  const [items, setItems] = useState([])

  function addItem(inputText) {

    setItems([
      ...items,
      inputText
    ])
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
      onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem 
              key={index}
              id={index}
              text={todoItem}
            />
          ))
            
            }
        </ul>
      </div>
    </div>
  )
}

export default App;
