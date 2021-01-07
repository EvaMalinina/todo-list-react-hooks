import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        backgroundColor: 'lightyellow'
    },
}));

const TodoList = ({ todos, completeTodo, editTodo, deleteTodo, saveTodo, noteRef }) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className={classes.root}>
            {todos.map((todo, inx) => {
                const labelId = `list-todo-${todo}`;

                return (
                    <ListItem key={todo} role={undefined} dense button>
                        {
                            (!todo.isEditing) ?
                                <>
                                    <ListItemIcon>
                                        <Checkbox
                                            color="primary"
                                            edge="start"
                                            checked={checked.indexOf(todo) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                            onClick={handleToggle(todo)}
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={labelId} primary={`${todo.text}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="edit">
                                            <EditIcon onClick={() => editTodo(inx)}/>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => deleteTodo(inx)}/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </>
                                :
                                <>
                                    <ListItemIcon>
                                        <Checkbox
                                            color="primary"
                                            edge="start"
                                            checked={checked.indexOf(todo) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <input
                                        defaultValue={todo.text}
                                        ref={noteRef}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <BookmarkIcon onClick={() => saveTodo(inx)}/>
                                        </IconButton>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon onClick={() => deleteTodo(inx)}/>
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </>
                        }
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodoList;
