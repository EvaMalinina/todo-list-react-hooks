import  React, { useState, useEffect, useRef } from 'react';

const Form = () => {

    const [ newTodo, setNewTodo ] = useState('What\'s need to be done?');
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
    const inputRef = useRef();
    const noteRef = useRef();
    let UniqKey = 123;
    const [ hint, setHint ] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        clearInput();
        inputRef.current.focus();
    }

    const addTodo = text => {
        if ( text !== '') {
            const newTodos = [...todos, { text }]
            setTodos(newTodos);
        } else {
            setHint('Task can\'t be empty');
        }
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
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        setTodos(newTodos);
    }

    const saveTodo = (inx) => {
        const newTodos = [...todos];
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        newTodos[inx].text = noteRef.current.value;
        setTodos(newTodos);
    }

    const clearInput = () => {
        setNewTodo('');
    }

    const clearHint = () => {
        setHint('');
    }

    const setTodo = todo => {
        clearHint();
        setNewTodo(todo);
    }

    useEffect(() => {
        console.log('use effect')
    }, [todos])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>{hint}</p>
                <input
                    value={newTodo}
                    onChange={(e) => setTodo(e.target.value)}
                    onFocus={clearInput}
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
                                                    defaultValue={todo.text}
                                                    ref={noteRef}
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

export default Form;