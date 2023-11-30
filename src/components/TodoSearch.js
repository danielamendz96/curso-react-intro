import React from 'react'
import '../css/TodoSearch.css';
import { TodoContext } from './TodoContext';


function TodoSearch() {
  const{
    searchValue,
    setSearchValue,
 } = React.useContext(TodoContext)

  return (

    <input placeholder='cortar cebolla'
      className='TodoSearch'
      value={searchValue}
      onChange={ (e)=>{
        setSearchValue(e.target.value);
        console.log ('se escribio');
        
        }
      }
      />
    
      
  );
}

export { TodoSearch };