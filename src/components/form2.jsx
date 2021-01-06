import  React, { useState, useEffect, useRef } from 'react';

const FormS = () => {

    const [ newTodo, setNewTodo ] = useState('what\'s need to be done?');
    const [ todos, setTodos ] = useState([
        {
            text: "Learn about React",
            isCompleted: false,
            isEditing: false
        },
        {
            text: "Meet friend for lunch",
            isCompleted: false,
            isEditing: false
        },
        {
            text: "Build really cool todo app",
            isCompleted: false,
            isEditing: false
        }
    ]);
    const [ note, setNote ] = useState();
    const inputRef = useRef();
    const noteRef = useRef();
    const [editMode, setEditMode] = useState(false)
    let UniqKey = 123;



    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
        inputRef.current.focus();
    }

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const removeTodo = inx => {
        const newArr = [...todos]
        newArr.splice(inx, 1)
        setTodos(newArr)
    }

    const completeTodo = inx => {
        const newTodos = [...todos];
        newTodos[inx].isCompleted = true;
        setTodos(newTodos);
    };

    const editTodo = inx => {
        const newTodos = [...todos];
        setEditMode(!editMode)
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        setNote(newTodos[inx].text);
        setTodos(newTodos);
    }

    const saveTodo = (inx) => {
        const newTodos = [...todos];
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        newTodos[inx].text = note;
        setTodos(newTodos);
    }


    // useEffect(() => {
    //     if (!editMode) {
    //         noteRef.current.focus();
    //     }
    // }, [editMode])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    ref={inputRef}
                />
                <button type="submit" alt="add-note">Add</button>
                <div className="notes">----------------------------------------
                    <ul>
                        {todos.map((todo, inx) => (
                                <li key={UniqKey++}>
                                    {
                                        (!todo.isEditing) ?
                                            <>
                                                <div style={{
                                                    textDecoration: todo.isCompleted ? "line-through" : "",
                                                }}>
                                                    {todo.text}
                                                </div>

                                                <div className="notes__btns">
                                                    <button type="button" onClick={() => editTodo(inx)}>edit</button>
                                                    <button type="button" onClick={() => completeTodo(inx)}>done</button>
                                                    <button type="button" onClick={() => removeTodo(inx)}>delete</button>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <input
                                                    value={note}
                                                    ref={noteRef}
                                                    onChange={(e) => setNote(e.target.value)}
                                                />

                                                <div className="notes__btns">
                                                    <button type="button" onClick={() => saveTodo(inx)}>save</button>
                                                    <button type="button" onClick={() => removeTodo(inx)}>delete</button>
                                                </div>
                                            </>
                                    }
                                </li>
                            ))}
                    </ul>
                </div>

            </form>
        </>
    )
}

export default FormS;