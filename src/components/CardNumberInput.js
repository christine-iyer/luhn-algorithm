import { useState } from "react"

export default function CardNumberInput({ todo }) {
  const [showInput, setShowInput] = useState(false)
  return (
  <div className="left">
        <h2
          onClick={(e) => {
            setShowInput(!showInput)
          }}
          >
          {todo.text}
        </h2>
        
      </div>

  )
}