import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'


export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => todos.filter((el) => el.checked).length;

  return (
    <div className="todo-results">
      Completed <FontAwesomeIcon icon={faCheckDouble} size="lg" color="orange"/> : 

      {calculateChecked()}
    </div>
  );
};
