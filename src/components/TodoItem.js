
import { DeleteIcon } from './DeleteIcon';
import { CompleteIcon } from './CompleteIcon';
import '../css/TodoItem.css';


function TodoItem (props){
    return (
      <li className="TodoItem">
        
        <CompleteIcon 
        completed={props.completed}
         onComplete={props.onComplete} 
        />
    
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}> 
      {props.text}
      </p>

      <DeleteIcon
      onDelete={props.onDelete} 
      />
      
      </li>
    );
  }


  export { TodoItem };