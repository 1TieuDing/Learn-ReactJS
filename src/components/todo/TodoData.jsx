
const TodoData = (props) => {
    const { TodoList } = props

    console.log(">>> checks props: ", TodoList)
    return (
        <div className="todo-data">
            {TodoList.map((item, index) => {
                console.log(">>> check map: ", item, index)
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

            <div>
                {JSON.stringify(props.TodoList)}
            </div>
        </div>
    )
}

export default TodoData