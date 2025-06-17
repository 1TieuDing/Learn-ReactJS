
const TodoNew = (props) => {
    console.log(">>> check points: ", props)
    const { addNewTodo } = props

    addNewTodo("TieuDing")
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    )
}

export default TodoNew