import { useState } from "react";
import DevPlanList from "./DevPlanList";

function PlanList(){
    const [PlanList, setPlanList] = useState (DevPlanList);
    const [newPlanListTask, setNewPlanListTask]=useState("");
    const [newPlanListDiscription, setNewPlanListDiscription]= useState("");
    const [newPlanListDeadline,  setNewPlanListDeadline] = useState("")     
    const [newPlanListComment, setNewPlanListComment] =useState("");
    const [newPlanListComplete, setNewPlanListComplete]= useState(false);

    function handleTaskChange(event) {
        setNewPlanListTask(event.target.value);
    }

    function handleDiscriptionChange(event) {
        setNewPlanListDiscription(event.target.value);
    }

    function handleDeadlineChange(event) {
        setNewPlanListDeadline(event.target.value);
    }
    function handleCommentChange(event) {
        setNewPlanListComment(event.target.value);
    }
    
    function addTask() {
        if (
            newPlanListTask.trim() !== "" ||
            newPlanListDiscription.trim() !== "" ||
            newPlanListDeadline.trim() !== "" ||
            newPlanListComment.trim() !== "" ||
            newPlanListComplete === true
        ) {
            setPlanList(p => [
                ...p,
                {
                    id: 0,
                    chore: newPlanListTask,
                    discription: newPlanListDiscription,
                    deadline: newPlanListDeadline,
                    Comment: newPlanListComment,
                    complete: newPlanListComplete
                }
            ]);
            setNewPlanListTask("");
            setNewPlanListDiscription("");
            setNewPlanListDeadline("")
            setNewPlanListComment(""), 
            setNewPlanListComplete(false)
        }
    }
    function handleMarkAsComplete(index) {
        setPlanList(tasks =>
            tasks.map((task, i) =>
                i === index ? { ...task, Complete: true } : task
            )
        );
    }

    function deleteTask(index) {
        const updatedTasks = PlanList.filter((_, i) => i !== index);
        setPlanList(updatedTasks);
    }
    function moveup(index){
        if (index > 0) {
            setPlanList(tasks => {               
                const newTasks = [...tasks];
                [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
                return newTasks;
            });
        }
    }
    function movedown(index){
        setPlanList(tasks => {    
            if (index < tasks.length - 1) {
                const newTasks = [...tasks];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                return newTasks;
            }
            return tasks;
        });
    }

    return(
       <div className="row">
        <button className="add-button" onClick={addTask}>
            Add New Task
        </button>
        <input
            type="text"
            placeholder="Enter a new Task."
            value={newPlanListTask}
            onChange={handleTaskChange}
        />
        <input
            type="text"
            placeholder="Enter a description."
            value={newPlanListDiscription}
            onChange={handleDiscriptionChange}
        />
        <input
            type="text"
            placeholder="Enter the Deadline."
            value={newPlanListDeadline}
            onChange={handleDeadlineChange}
        />
        <input
            type="text"
            placeholder="Enter a comment."
            value={newPlanListComment}
            onChange={handleCommentChange}
        />
        <ul className="rowUl">
            {PlanList.map((item, index) => (
                <li className="col-3 decore"
                    key={item.id}
                    style={{ textDecoration: item.Complete ? 'line-through' : '' }}
                >
                    <h3>{item.task}</h3>
                    <p>
                        {item.discription}{" "}--{" "}{item.Deadline}
                    </p>
                    <p>{item.Comment}</p>
                    <button onClick={() => handleMarkAsComplete(index)}>
                        Mark as Complete
                    </button>
                    <button onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button onClick={() => moveup(index)}>
                        High Priority:∆
                    </button>
                    <button onClick={() => movedown(index)}>
                        Low Priority: ∇
                    </button>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default PlanList