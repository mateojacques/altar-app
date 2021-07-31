import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  feed: {
    width: '100%',
    display: 'flex',
    padding: '20px 0 20px 50px',
    gap: 30,
    [theme.breakpoints.down('lg')]: {
      padding: '0px 20px 20px 20px',
    },
  },
  row: {
    maxWidth: 300,
    maxHeight: '10000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: 30,
    overflow: 'hidden',
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
