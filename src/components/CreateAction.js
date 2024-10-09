import React, { useContext, useState } from 'react'
import { AppMainContext } from '../contexts/AppMainContext';

const CreateAction = ({addItem}) => {

  const [itemName, setItem] = useState('');
  const {itemList, setItemToList} = useContext(AppMainContext)

  // Handle input change
  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    setItem(inputVal);
  }

  // Handle Add action for Item
  const handleAddActionClick = () => {
    const item = {
      id: itemList.length +1,
      name: itemName
    }
    console.log("Add the following item to list :", item);
    setItemToList((prev)=>[...prev, item]);
    // addItem(item);
    localStorage.setItem('todoList',JSON.stringify(itemList));
  }
  return (
    <div>
        <div style={{margin: '20px'}}>
            <input placeholder='enter action' value={itemName} type='text' onChange={handleInputChange}/>
            <button onClick={handleAddActionClick}>Add Action</button>
        </div>
    </div>
  )
}

export default CreateAction