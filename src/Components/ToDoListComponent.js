import React from 'react';
import ToDo from './ToDoComponent';

const ToDoList = ({tasks}) => {
    return (
        <ul className="list-group">
            {
                tasks.map((eachTask, index) =>
                    <ToDo key={index} task={eachTask.title} />)

            }
        </ul>
    )

}

export default ToDoList;