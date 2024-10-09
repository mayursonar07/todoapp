import logo from './logo.svg';
import './App.css';
import CreateAction from './components/CreateAction';
import ActionsList from './components/ActionsList';
import { useMemo, useState } from 'react';
import { AppMainContext } from './contexts/AppMainContext';

function App() {
  // Lift state up
  const [itemList, setItemToList] = useState([]);
  const [sampleObject, setSampleObject] = useState({});

  // For optimization we can create a memoizedActionContext
  // This will prevent re-render of child components which use useContext
  const memoizedActionContext = useMemo(()=>({
    // Here we will create that 'value' object that is to be passed to Provider
    
      itemList, 
      setItemToList
    
  }),[itemList, setItemToList])

  // We will use a callBack prop 
  // to get the name of new list item from CreateAction component
  // And then pass it to Action List
  const handleAddClick = (itemToAdd) => {
    localStorage.setItem('todoList',itemList);
    setItemToList((prev)=>[...prev, itemToAdd]);


  }

  return (
    // <AppMainContext.Provider value={{itemList, setItemToList}}>
    <AppMainContext.Provider value={memoizedActionContext}>
    <div style={{display: 'flex'}}>
      <CreateAction addItem={handleAddClick}/>
      <ActionsList/>
    </div>
    </AppMainContext.Provider>
  );
}

export default App;
