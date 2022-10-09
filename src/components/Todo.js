export default function Todo({ toDos, handleDeleteClick }) {


    const ToDoItem = toDos.map(item => {
       return <section className="toDoItem" key={item.id}>
                <h3>{item.toDo}</h3>
                <h4>{item.dueDate}</h4>
                <button onClick={() => handleDeleteClick(item.id)} className="completeButton">Complete</button>
            </section>
    })
    return (
        <div className="toDoList">
            {ToDoItem}
        </div>
    )
}