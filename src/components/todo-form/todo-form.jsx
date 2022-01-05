import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export  const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const AddTodo = () => {
    if (task) {
      setTodos([
        ...todos,
        {
          id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
          label: task,
          checked: false,
        },
      ]);
      setTask('');
    }
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      AddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={onKeyUp}
      />
      <button type="button" onClick={AddTodo}>
        Add task
      </button>
    </div>
  );
};
