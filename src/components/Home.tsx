import React, { useState } from 'react';

import { useStyles } from './Home.styles';
import ListItem from './ListItem';

interface Props {
  text: string,
  isCompleted: boolean,
  todos: Array<Object>,
}


const Home: React.FC = () => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([{text: 'Create to do app', isCompleted: false}]);


  const handleInput = (e: { target: { value: string; }; }) => {
    setText(e.target.value)
  }

  const addTodo = () => {
    setText('');
    setTodos([
      ...todos,
      { text,
        isCompleted: false,
      }
    ])
  }

  const toggleComplete = (i: number, prevState: boolean) => {
    console.log('clicked complete', i)
    // create new item with 'complete' and create new array equal len with the new item
    const newItems = todos.map((todo, index) => index === i ? ({...todos[i], isCompleted: !prevState}) : todo);
    setTodos([...newItems]);
  }

  const onDelete = (i: number) => {
    console.log('DEL', i);
    const newItems = todos.slice(0, i).concat(todos.slice(i+1))
    setTodos([...newItems]);
  }

  const list = todos.map((todo, i) => (
    <ListItem
      text={todo.text}
      isCompleted={todo.isCompleted}
      onDelete={onDelete}
      toggleComplete={toggleComplete}
      index={i}
      key={i}
    />
  ))


  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>To Do App</h1>
      <div className={classes.listContainer}>
        {list}
      </div>
      <input
        type='text'
        value={text}
        onChange={handleInput}
        className={classes.input}
      />
      <div onClick={addTodo} className={classes.btn}>Add todo</div>
    </div>
  );
}

export default Home;
