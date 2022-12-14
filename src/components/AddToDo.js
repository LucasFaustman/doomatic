import { useState } from "react"

export default function AddToDo({onAdd}) {

    const [item,setItem] = useState(
        {
            toDo: ''
          }
    )


    function handleChange(e) {

        let {name,value} = e.target

        setItem(prevItem => ({
            ...prevItem,
            [name] : value,
        }))
       }

       function onSubmit(e) {
           e.preventDefault()

           onAdd(item)
           setItem({
            toDo: '',
            dueDate: ''
           })

       }
    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter to do here..."
                    onChange={handleChange}
                    name="toDo"
                    value={item.toDo}
                    />
                    <button>Add to do</button>
            </form>
        </div>
    )
}