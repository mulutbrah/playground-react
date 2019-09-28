import React, { useEffect, useState } from 'react';

import './style.scss';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [myTodos, setMyTodos] = useState(
    JSON.parse(localStorage.getItem('todo')) || []
  );
  const [filteredTodos, setFilteredTodos] = useState();

  const createTodo = (e) => {
    e.preventDefault();
    const MY_TODO = JSON.parse(localStorage.getItem('todo'));

    if (MY_TODO) {
      MY_TODO.push(todo);
      setMyTodos(MY_TODO);
      setTodo('');
    } else {
      setMyTodos([todo]);
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const deleteTodo = (index) => {
    const temp = myTodos.slice();
    temp.splice(index, 1);
    setMyTodos(temp);
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(myTodos));
    setFilteredTodos(myTodos);
  }, [myTodos]);

  return (
    <div className="homepage homepage--white">
      <h4>To-Do List</h4>
      <form onSubmit={createTodo}>
        <input
          className="input"
          type="text"
          name="title"
          onChange={handleChange}
          value={todo}
        />
        {/* <input type="text" name="title" onChange={(e) => handleChange(event.target.value)} value={todo} /> */}
        <button type="submit">Create</button>
      </form>
      <div className="todo todo--container">
        <ol className="list">
          {filteredTodos &&
            filteredTodos.map((todo, index) => (
              <li>
                <div>{`${index + 1}. ${todo}`}</div>
                <div className="dlt-btn" onClick={() => deleteTodo(index)}>
                  Delete
                </div>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Home;
