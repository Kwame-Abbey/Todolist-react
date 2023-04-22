import { useState } from "react";

export default function InputArea({ onAdd }) {

    const [inputText, setInputText] = useState("")
    
    function handleChange(event) {
        const newValue = event.target.value

        setInputText(newValue)
    }

    return (
        <div className="form">
        <input 
        onChange={handleChange}
        type="text"  
        value={inputText}
        />
        <button onClick={() => (
            onAdd(inputText)
        )}>
          <span>Add</span>
        </button>
      </div>
    );
    
}