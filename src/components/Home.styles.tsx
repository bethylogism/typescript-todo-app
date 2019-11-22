import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 200,
    width: '50vw',
    margin: '30px auto',
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'cornflowerBlue'
  },
  heading: {
    margin: '10px 50px',
    justifyContent: 'center',
    color: 'white',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 400,
  },
  input: {
    minHeight: 30,
    minWidth: 300,
    borderRadius: 10,
    margin: 15,
    padding: 5,
    border: 'none',
    fontSize: 16,
  },
  btn: {
    padding: 10,
    border: 'none',
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 5,
      '&:hover': {
        backgroundColor: 'lightgrey'
      },
  },
})