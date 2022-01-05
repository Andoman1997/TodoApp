import * as React from 'react';
import { Checkbox } from '../checkbox';
import { TodosContext } from '../../todo-context';
import './todo-list.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const DeleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const onCheck = (id) => {
    setTodos(todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          checked: !el.checked,
        };
      }
      return el;
    }));
  };

  const onKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      onCheck(id);
    }
  };


  return (
    <>
    <div className="todo-list">
      <span className="todo-list-title">Todos : 
      <FontAwesomeIcon icon={faClipboardList} size="lg" color="green"/>
          
     </span>
         <select className='select'>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
         </select>

      {todos.length ? (
        <div className="todo-list-content">
        
    
          {todos.map((todoItem) => (
            
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => onCheck(todoItem.id)}
              onKeyUp={(e) => onKeyUp(e, todoItem.id)}
              onDelete={() => DeleteTodo(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">What shall we do today?!</div>
        
      )}
    </div>
  </>
  );
};
