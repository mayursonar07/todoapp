import React, { useEffect } from 'react'
import '../App.css'
import Action from './Action';
import { useContext } from 'react';
import { AppMainContext } from '../contexts/AppMainContext';


const ActionsList = () => {

    const {itemList, setItemToList} = useContext(AppMainContext);

    useEffect(()=>{
        const storedList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')):[];
        if(storedList.length > 0) {
            setItemToList(storedList);
        }
    },[])
    
    // Create a list of items
    const rows = itemList.map((item)=>{
        return <Action item={item}/>
    })
  return (
    <>
      <div style={{margin: '20px'}}>
        <table>
            <thead>
                <tr>
                    <td><b>Label</b></td>
                    <td><b>Actions</b></td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
        
        </div>  
    </>
  )
}

export default ActionsList

