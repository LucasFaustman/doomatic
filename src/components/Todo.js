import EditToDo from '../components/EditToDo'

export default function Todo({ toDos, handleCompleteClick, handleEditClick }) {


    const ToDoItem = toDos.map(item => {
       return <section className="todo" key={item.id}>
                <h3 className='p-1 m-1'>{item.toDo}</h3>
                <div className='d-flex p-0'>
                    <EditToDo toDoItem={item.toDo} id={item.id} handleEditClick={handleEditClick}  />
                    <button onClick={() => handleCompleteClick(item.id)} className="btn btn-success">Complete</button>
                </div>
                </section>
    })
    return (
        <div className="todo-list">
            {ToDoItem}
        </div>
    )
}