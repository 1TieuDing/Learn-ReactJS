
const TodoData = (props) => {
    const { name, age, data } = props

    console.log(">>> checks props: ", props)
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>123</div>
        </div>
    )
}

export default TodoData