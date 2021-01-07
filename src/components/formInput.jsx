import  React from 'react';
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


const TodoCreator = ({ todo, setTodo, clearInput, inputRef, isInputEmpty }) => {
    const classes = useStyles();

    return (
        <div className="form__input">
            <ThemeProvider theme={theme}>
                <FormControl   className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="What's need to be done?"
                        value={todo}
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
            <Button type="submit" alt="add-note" className={classes.root}>Add task</Button>
        </div>
    )

}

export  default TodoCreator;