import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { AppMainContext } from '../contexts/AppMainContext';

const Action = ({item}) => {
    const [editMode, toggleEditMode] = useState(false);
    // const idRef = useRef(id);
    const [inputValue, setInputValue] = useState('');
    const {itemList, setItemToList} = useContext(AppMainContext);

    const inputRef = useRef(null);

    const onInputValChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleDelete = (id) => {
        console.log(id);
        const newList = itemList.filter((e)=>{
            return e.id !== id;
        })

        setItemToList(newList);
        localStorage.setItem('todoList',JSON.stringify(newList));
        
    }
    const handleEdit = (id) => {
        toggleEditMode(!editMode);
    }

    const handleUpdate = (id) => {
        console.log(inputRef.current.value);
        toggleEditMode(!editMode);
        // Update the name in item list
        itemList.forEach((item)=>{
            if(item.id === id) item.name = inputRef.current.value;
        });

        setItemToList(itemList);
        localStorage.setItem('todoList',JSON.stringify(itemList));
    }
  return (
    <>
        {editMode === true 
        ?   
        <>
            <tr>
                <td><input onChange={onInputValChange} ref={inputRef} value={inputValue}/></td>
                <td>
                    <button value={inputValue} onClick={()=>handleUpdate(item.id)}>Update</button>
                    
                </td>
            </tr>
        
        </>
        : 
        <>
            <tr>
                <td>{item.name}</td>
                <td>
                    <button onClick={()=>handleEdit(item.id)}>Edit</button>
                    <button onClick={()=>handleDelete(item.id)}>Delete</button>
                </td>
            </tr>
        </>
        }
    </>
  )
}

export default Action