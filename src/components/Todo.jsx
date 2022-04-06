import React from "react";

const Todo = (props) =>{
    return <div className="todoholder"><div className="todo">
    <div className="text"><strong>Сосать {props.name}</strong>
    <div>{props.id}</div>
    </div>
    <div className="actionContainer"><button>Complete</button><button>Delete</button></div>
    </div>
    </div>
}

export default Todo;