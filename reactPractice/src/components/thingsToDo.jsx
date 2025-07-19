import { useState } from "react";
import toDoListData from "../toDoListData (1) (1)";

function ThingsToDo (){
    
    const [thingsToDo, setThingsToDo] = useState(toDoListData);
    const [newThingsToDoName, setNewThingsToDoName] = useState("");
    const [newThingsToDoDiscription, setNewThingsToDoDiscription] = useState("");
    const [newThingsToDoTimeDue, setNewThingsToDoTimeDue] = useState("");
    const [newThingsToDoDone, setNewThingsToDoDone] = useState(false);

    function handleNameChange(event) {
        setNewThingsToDoName(event.target.value);
    }

    function handleDescriptionChange(event) {
        setNewThingsToDoDiscription(event.target.value);
    }

    function handleTimeDueChange(event) {
        setNewThingsToDoTimeDue(event.target.value);
    }
    
    function addTask() {
        if (
            newThingsToDoName.trim() !== "" ||
            newThingsToDoDiscription.trim() !== "" ||
            newThingsToDoTimeDue.trim() !== "" ||
            newThingsToDoDone === true
        ) {
            setThingsToDo(t => [
                ...t,
                {
                    id: Date.now(),
                    name: newThingsToDoName,
                    description: newThingsToDoDiscription,
                    timeDue: newThingsToDoTimeDue,
                    done: newThingsToDoDone
                }
            ]);
            setNewThingsToDoName("");
            setNewThingsToDoDiscription("");
            setNewThingsToDoTimeDue("");
            setNewThingsToDoDone(false);
        }
    }
    return(
       <div className="row">
        <button className="add-button" onClick={addTask}>
            Add New Task
        </button>
        <input
            type="text"
            placeholder="Enter a new Task."
            value={newThingsToDoName}
            onChange={handleNameChange}
        />
        <input
            type="text"
            placeholder="Enter a description."
            value={newThingsToDoDiscription}
            onChange={handleDescriptionChange}
        />
        <input
            type="text"
            placeholder="Enter Time Due" 
            value={newThingsToDoTimeDue}
            onChange={handleTimeDueChange}
        />
        <input 
            type="checkbox"
            checked={newThingsToDoDone}
            onChange={e => setNewThingsToDoDone(e.target.checked)}
        />

                    <ol className="col-12">
                        {thingsToDo.map((item) => (
                            <li
                                key={item.id}
                                style={{ textDecoration: item.done ? 'line-through' : 'none' }}
                            >
                                <h4>{item.name}</h4>
                                <p>
                                    {item.description}{" "}--{" "}{item.timeDue}
                                </p>
                            </li>
                        ))}
                    </ol>
        </div>
    );
}

export default ThingsToDo;
