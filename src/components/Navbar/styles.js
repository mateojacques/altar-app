import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  navbar: {
    width: 135,
    height: '100vh',
    backgroundColor: `${theme.palette.primary.main}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      width: '100%',
      height: 100,
      justifyContent: 'flex-end',
      position: 'fixed',
      top: 0,
      left: 0,
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      paddingRight: 20,
    },
  },
  nav__link: {
    color: '#fff',
    marginBottom: 15,
  },
  linkActive: {
    color: `${theme.palette.secondary.main}`,
  },
}))

export default styles
