import  React, { useState, useEffect, useRef } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, gray 30%, black 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 55,
        padding: '0 30px',
        whiteSpace: 'nowrap'
    },
    mainInput: {
        width: '90%'
    },
    label: {
        width: '100%'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: { main: '#000000' }
    }
});


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
    let UniqKey = 123;
    const [ isInputEmpty, setInputEmpty ] = useState(false)
    const classes = useStyles();


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
        <>
            <form onSubmit={handleSubmit}>

                <div className="form__input">
                    <ThemeProvider theme={theme}>
                        <FormControl   className={classes.label}>
                            <TextField
                                id="outlined-basic"
                                label="What's need to be done?"
                                value={newTodo}
                                variant="outlined"
                                onChange={(e) => setTodo(e.target.value)}
                                onFocus={clearInput}
                                ref={inputRef}
                                className={classes.mainInput}
                                aria-describedby="component-error-text"
                            />

                            { !isInputEmpty ?
                                <></>
                                :
                                <>
                                    <FormHelperText id="component-error-text">Task can't be empty</FormHelperText>
                                </>
                            }
                        </FormControl>
                    </ThemeProvider>
                    {/*<div className="form__btn-wrapper">*/}
                        <Button type="submit" alt="add-note" className={classes.root}>Add task</Button>
                    {/*</div>*/}
                </div>

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