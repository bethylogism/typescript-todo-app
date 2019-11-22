import React from 'react';
import { useStyles } from './ListItem.styles'

export default function ListItem(
  props: {
    text: string;
    isCompleted: boolean;
    onDelete: any;
    toggleComplete: any;
    index: number
  }) {
  const classes = useStyles();
  const { text, isCompleted, toggleComplete, onDelete, index } = props;

  return (
    <div className={classes.container}>
      <input
        type='checkbox'
        checked={isCompleted}
        onChange={() => toggleComplete(index, isCompleted)}
        className={classes.checkbox}
      />
      <p className={classes.todo}>{text}</p>
      { isCompleted
        ? <button onClick={() => onDelete(index)} className={classes.deleteBtn}>X</button>
        : null }
    </div>
  )
}