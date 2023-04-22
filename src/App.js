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

  function deleteItem(id) {
    setItems(items.filter((item, index) => {
      return index !== id
    }))
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
              onDelete={deleteItem}
            />
          ))
            
            }
        </ul>
      </div>
    </div>
  )
}

export default App;
