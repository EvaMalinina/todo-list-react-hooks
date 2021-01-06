import  React, { useState, useEffect, useRef } from 'react';

const Form = () => {
    let UniqKey = 192;

    const [ UniqueId, setUniqueId ] = useState(123)
    const [ newTodo, addNewTodo ] = useState({id: 1, text: 'new task', isEditing: false});
    const [ todos, setTodos ] = useState([])
    const inputRef = useRef();
    // const todoRef = useRef();
    // const [isEditing, setEditing] = useState(false);
    // const [ note, setNote ] = useState()
    //
    // const toggleEditing = (todoRef) => {
    //     setEditing(!isEditing);
    //     // if(!isEditing) {
    //     //             todoRef.current.focus();
    //     //         }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, newTodo]);
        inputRef.current.value = '';
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // const deleteTodo = (inx) => {
    //
    //     // console.log('id', deleteTodoId)
    //     console.log('todos', todos)
    //     // // todos.forEach((el) => console.log(el.id))
    //     // const newArr = todos.filter((el) => el.id !== deleteTodoId)
    //
    //     // setTodos(newArr);
    //     // const indx = todos.findIndex((el) => el.id === deleteTodoId);
    //     // console.log('indx', indx)
    //     // console.log('deleteTodoId', deleteTodoId)
    //     // // const newArr = todos.filter((indx) => indx !== deleteTodoId)
    //     // let copy = [...todos]
    //     // const newArr = [
    //     //     ...copy.slice( 0, indx ),
    //     //     ...copy.slice( indx +1)
    //     // ];
    //
    //     // console.log('todos', todos)
    //     const newArr = todos.slice();
    //     newArr.splice(inx, 1)
    //     console.log('newArr', newArr)
    //     return setTodos(newArr);
    // };

    // const  handleInputChange = (e) => {
    //     setNote(e.target.value);
    // };
    //
    // useEffect(() => {
    //     inputRef.current.focus();
    //     // deleteTodo()
    //     // UniqueId++;
    // }, [newTodo, todos]);

    // useEffect((todoRef) => {
    //     if(!isEditing) {
    //         todoRef.current.focus();
    //     }
    // }, [!isEditing])

    return (
       <>
           <form onSubmit={(e) => handleSubmit(e)}>
               <input
                   defaultValue={newTodo.text}
                   onChange={(e) => addNewTodo({...newTodo, text: e.target.value, id: todos.length + 1})}
                   ref={inputRef}
               />
               <button type="submit" alt="add-note">Add</button>
               <div className="notes">----------------------------------------
                   <ul>
                       {todos.map((newTodo, inx) => {
                           return(
                               <li key={UniqKey++}>
                                   <input
                                       type="string"
                                       defaultValue={newTodo.text}
                                       // ref={todoRef}
                                       // onChange={(e) => setNote(e.target.value)}
                                       // onBlur={(e) => handleInputChange(e)}
                                   />

                                   {/*<button type="button" onClick={(newTodo) => toggleEditing(newTodo)}>edit</button>*/}
                                   <button type="button" onClick={() => removeTodo(inx)}>delete</button>
                               </li>
                           )})}
                   </ul>
               </div>

           </form>
       </>
    )
}

export default Form;