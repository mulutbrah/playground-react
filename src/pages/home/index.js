import React, { useEffect, useState } from 'react';

import './style.scss';

const Home = () => {
  const [todo, setTodo] = useState('');
  const [myTodo, setMyTodo] = useState(
    JSON.parse(localStorage.getItem('todo')) || []
  );

  const createTodo = (e) => {
    e.preventDefault();
    const MY_TODO = JSON.parse(localStorage.getItem('todo'));

    if (MY_TODO) {
      MY_TODO.push(todo);
      setMyTodo(MY_TODO);
      setTodo('');
    } else {
      setMyTodo([todo]);
    }
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const deleteTodo = (index) => {
    const temp = myTodo.slice();
    temp.splice(index, 1);
    setMyTodo(temp);
  };

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(myTodo));
  }, [myTodo]);

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
          {myTodo &&
            myTodo.map((todo, index) => (
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
