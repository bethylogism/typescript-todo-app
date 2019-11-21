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
      <input type='checkbox' checked={isCompleted} onChange={() => toggleComplete(index, isCompleted)} />
      <p>{text}</p>
      { isCompleted ? <button onClick={() => onDelete(index)}>X</button> : null }
    </div>
  )
}