import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import ReactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {
  const [TodoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }

    setTodoList([...TodoList, newTodo])
  }

  const deleteTodo = (id) => {
    const newTodo = TodoList.filter(item => item.id !== id)
    setTodoList(newTodo)
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {TodoList.length > 0 ?
        <TodoData
          TodoList={TodoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
    </div>

  )
}

export default App
