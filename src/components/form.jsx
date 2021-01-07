import  React, { useState, useEffect, useRef } from 'react';
import TodoCreator from "./formInput";
import TodoList from "./list";


const Form = () => {

    const [ newTodo, setNewTodo ] = useState('');
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
    const [ isInputEmpty, setInputEmpty ] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        clearInput();
        inputRef.current.focus();
    }

    const addTodo = text => {
        if ( text !== '') {
            const newTodos = [...todos, { text }]
            setNewTodo('')
            setTodos(newTodos);
        } else {
            setInputEmpty(true);
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

    const setTodo = todo => {
        setInputEmpty(false);
        setNewTodo(todo);
    }

    useEffect(() => {
        console.log('use effect')
    }, [todos])

    return (
        <form onSubmit={handleSubmit}>

                <TodoCreator
                    todo={newTodo}
                    setTodo={setTodo}
                    clearInput={clearInput}
                    inputRef={inputRef}
                    isInputEmpty={isInputEmpty}
                />

                <TodoList
                    todos={todos}
                    completeTodo={completeTodo}
                    editTodo={editTodo}
                    deleteTodo={removeTodo}
                    saveTodo={saveTodo}
                    noteRef={noteRef}
                />
            </form>
    )
}

export default Form;