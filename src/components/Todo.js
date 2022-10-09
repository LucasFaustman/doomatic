export default function Todo({ toDos }) {


    const ToDoItem = toDos.map(item => {
       return <section className="toDoItem" key={item.id}>
                <h3>{item.toDo}</h3>
                <h4>{item.dueDate}</h4>
            </section>
    })
    return (
        <div className="toDoList">
            {ToDoItem}
        </div>
    )
}