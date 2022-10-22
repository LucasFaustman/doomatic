export default function Todo({ toDos, handleCompleteClick }) {


    const ToDoItem = toDos.sort((a,b) => a.dueDate - b.dueDate).map(item => {
       return <section className="todo" key={item.id}>
                <h3>{item.toDo}</h3>
                <h4>{item.dueDate}</h4>
                <button onClick={() => handleCompleteClick(item.id)} className="complete-btn">Complete</button>
            </section>
    })
    return (
        <div className="todo-list">
            {ToDoItem}
        </div>
    )
}