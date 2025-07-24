
import ToDoItem from "./ToDoItem"
import list from "../toDoListData (1)"

function Body() {
    console.log(list);

    const itemList = list.map(
        (currentItem) => {
            return <ToDoItem itemName={currentItem.name} itemDesc={currentItem.description} itemDue={currentItem.timeDue} itemComplete={currentItem.done} />
        }
    )

    return(
        <section role="main" >
            <div className="row box">
                {itemList}
            </div>
        </section>
    )
}

export default Body