import CardNumberInput from './CardNumberInput'

export default function CardVerification({
    todos,
    addTodo
  }) {
    return (
      <>
        <h1>Create Todo</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
          }}
        />
        {todos.length ? (
          <>
            <h1>Todo Items</h1>
            <ul className="todolist">
              
            </ul>
            
            <ul className="todolist">
              {todos
                .map((todo) => {
                  return (
                    <CardNumberInput
                      todo={todo}

                    />
                  )
                })}
            </ul>
          </>
        ) : (
          <h1>No Todos Added Yet</h1>
        )}
      </>
    )
  }