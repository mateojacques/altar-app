import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  feed: {
    width: '100%',
    display: 'flex',
    padding: 20,
    gap: 30,
    [theme.breakpoints.down('lg')]: {
      gap: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: 100,
    },
  },
  row: {
    width: '100%',
    maxWidth: 350,
    maxHeight: '1000vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 30,
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
      maxHeight: 'unset',
      padding: '0 20px',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'unset',
    },
  },
  img: {
    width: '100%',
    borderRadius: 20,
    transition: '.4s ease',
    filter: 'sepia(0%) hue-rotate(0deg) saturate(100%)',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
      filter: 'sepia(100%) hue-rotate(18deg) saturate(200%)',
    },
  },
}))

export default styles
