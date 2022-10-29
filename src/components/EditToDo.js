import { useState } from "react"

export default function EditToDo({ id, handleEditClick, toDoItem }) {

  const [changedToDo, setChangedTodo] = useState(toDoItem)

function handleDescriptionChange(e) {
  setChangedTodo(e.target.value)
}

function handleExitEdits() {
  setChangedTodo(toDoItem)
} 

    return (
        <div>
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${id}`}>
  Edit
</button>

<div className="modal" id={`id${id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Edit Your Task</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body">
                    <input type="text" 
                    value = {changedToDo}
                    onChange={handleDescriptionChange}
                    className="form-control" />
                </div>
      <div className="modal-footer">
        <button type="button" onClick={() => handleEditClick(id, changedToDo)} 
                    className="btn btn-warning" data-dismiss="modal">
                        Edit
                </button >
        <button onClick={handleExitEdits} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
        </div>
    )
}