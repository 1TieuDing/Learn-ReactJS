import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [TodoList, setTodoList] = useState([
    { id: 1, name: "Learning React " },
    { id: 2, name: "Watching Youtube" }
  ])

  const ITieuDing = "TieuDing"
  const age = 25
  const data = {
    address: "Ha noi",
    country: "Viet nam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={ITieuDing}
        age={age}
        data={data}
        TodoList={TodoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>

  )
}

export default App
