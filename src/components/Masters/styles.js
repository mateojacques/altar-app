import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  masters: {
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      paddingRight: 50,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '130px 20px 40px 20px',
    },
  },
  title: {
    color: '#fff',
    fontFamily: `'Righteous', 'Roboto', sans-serif !important`,
    fontSize: '4rem',
    marginBottom: '70px !important',
    wordWrap: 'break-word',
    [theme.breakpoints.down('lg')]: {
      marginBottom: 40,
      fontSize: '3rem',
    },
  },
  span: {
    color: `${theme.palette.secondary.main}`,
  },
  pathTitle: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 200,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 300,
    },
  },
  pickTitle: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 150,
    },
  },
  boxes: { gap: 50 },
  box: {
    width: 420,
    height: 420,
    filter: 'grayscale(100%)',
    transition: '.3s ease',
    cursor: 'pointer',
    '&:hover': {
      filter: 'grayscale(0%)',
      // outline: `3px solid ${theme.palette.secondary.main}`,
      boxShadow: '5px 5px 10px 0px rgba(247,201,48,0.25)',
    },
    [theme.breakpoints.down('lg')]: {
      width: 300,
      height: 300,
    },
  },
  boxTitle: {
    color: `${theme.palette.secondary.main}`,
    fontFamily: `'Righteous', 'Roboto', sans-serif !important`,
  },
  mastersContainer: {
    gap: '75px 50px',
    maxHeight: '70vh',
    overflow: 'scroll',
  },
  masterItem: {
    cursor: 'pointer',
    marginBottom: 20,
  },
  masterImg: {
    height: 500,
    color: '#fff',
    filter:
      'grayscale(100%) invert(10%) sepia(0%) hue-rotate(0deg) saturate(100%)',
    transition: 'filter .3s ease',
    '&:hover': {
      filter:
        'grayscale(100%) invert(10%) sepia(100%) hue-rotate(20deg) saturate(150%)',
    },
  },
  masterImg__label: {
    marginTop: 30,
  },
  selected: {
    filter:
      'grayscale(100%) invert(10%) sepia(100%) hue-rotate(20deg) saturate(150%)',
  },
  pickBtn: {
    position: 'absolute',
    bottom: 50,
    right: 75,
    zIndex: 3,
    [theme.breakpoints.down('lg')]: {
      bottom: 20,
      right: 50,
    },
    [theme.breakpoints.down('md')]: {
      bottom: 20,
      right: 20,
    },
  },
  pickBtn__font: {
    fontSize: '4.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3.5rem',
    },
  },
  userMastersContainer: {
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 50,
    maxHeight: '70vh',
    overflow: 'scroll',
    [theme.breakpoints.down('md')]: {
      padding: '50px 0',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 30,
      maxHeight: 'unset',
    },
  },
  userMasterItem: {
    marginBottom: 50,
  },
  userMasterItem__imgContainer: {
    width: '100%',
    height: 350,
    overflow: 'hidden',
    filter:
      'grayscale(100%) invert(0%) sepia(0%) hue-rotate(0deg) saturate(100%)',
    transition: '.3s ease',
    cursor: 'none',
    '&:hover': {
      filter:
        'grayscale(0%) invert(10%) sepia(100%) hue-rotate(20deg) saturate(150%)',
    },
  },
  userMasterItem__img: {
    width: '100%',
  },
  userMasterItem__info: {
    textAlign: 'center',
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: '30px 5px',
    minHeight: 300,
  },
  userMasterItem__title: {
    color: '#fff',
    fontFamily: `'Righteous', 'Roboto', sans-serif !important`,
    transition: '.3s ease',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  userMasterItem__desc: {
    color: '#ccc',
    fontFamily: `'Roboto', sans-serif`,
    width: '70%',
  },
  userMasters__header: {
    paddingRight: 80,
    marginBottom: 50,
    [theme.breakpoints.down('lg')]: {
      paddingRight: 50,
    },
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
    },
  },
}))

export default styles
