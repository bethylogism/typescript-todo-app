import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    minHeight: 200,
    width: '50vw',
    margin: '30px auto',
    justifyContent: 'center',
  },
  heading: {
    margin: '10px 50px',
  }
})