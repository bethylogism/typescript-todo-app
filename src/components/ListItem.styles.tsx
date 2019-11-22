import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flex: 1,
    minHeight: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  checkbox: {
    margin:  10,
  },
  todo: {
    margin:  10,
    color: 'white',
    fontSize: 16,
  },
  deleteBtn: {
    margin:  10,
    padding: 10,
    fontWeight: 'bold',
  },
})