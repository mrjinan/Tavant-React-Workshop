import React from 'react';


const AddToDoComponent = () => {
    return (
        <form>
            <div className="form-group">
                <label for="task">Task Name:</label>
                <input type="text" className="form-control" id="task" />
            </div>
        </form>
            )
}

export default AddToDoComponent;