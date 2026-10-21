import React, {useState} from 'react';


export const AddTodo = (props) => {
    const[title, setTitle] = useState("");
    const[desc,setDesc] = useState("");

    const submit = (e) => {

        e.preventDefault();
        if(!title || !desc) {
            alert("Title or Description cannot be blank");
            return;
        }

        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <>
            <div className="container my-3">
                <h3>Add a Todo</h3>
                <form onSubmit={submit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <input 
                            type="text" 
                            value={desc} 
                            onChange={(e) => setDesc(e.target.value)} 
                            className="form-control" 
                            id="form-control" 
                        
                        />
                    </div>
                    <div className="form-group form-check">
    
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        </>
    );
}