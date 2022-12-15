import './App.css';
import { useState, useEffect } from 'react';

import CardVerification from "./components/CardVerification"
import CardNumberInput from './components/CardNumberInput'


export default function App() {
    const [todos, setTodos] = useState([])

    const addTodo = (e) => {
        const newTodo = { text: e.target.e, id: Date.now(), completed: false }
        setTodos([newTodo, ...todos])
        e.target.e = ''
    }
    const  validCard = false;
    // takes the form field value and returns true on valid number
function valid_credit_card(e) {
  // accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(e)) return false;
  
  // The Luhn Algorithm. It's so pretty.
      var nCheck = 0, nDigit = 0, bEven = false;
      e = e.replace(/\D/g, "");
  
      for (var n = e.length - 1; n >= 0; n--) {
          var cDigit = e.charAt(n),
              nDigit = parseInt(cDigit, 10);
  
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) === 0;
  }



 
   

  return (
    <div className="App">
      <CardVerification
     todos={todos}
        addTodo={addTodo}
        
      />
    </div>
  )
}