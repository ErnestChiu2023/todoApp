import React from 'react';

const ToDo = ({todos, deleteItem}) => {

  const todoList = (todos.length > 0) ? (
    todos.map(todo => {
      return(
        <div className='collection-item'  key={todo.id} onClick={() => {deleteItem(todo.id)}}>
          <span>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no to do's left </p>
  )

  return (
    <div className="collection">
      { todoList }
    </div>
  );
}
export default ToDo;
