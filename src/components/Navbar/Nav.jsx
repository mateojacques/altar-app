import useStyles from './styles'
import { IconButton } from '@material-ui/core' // eslint-disable-next-line
import { Home, Search, Person, Settings } from '@material-ui/icons'

const Nav = ({ currentView, onChangeView }) => {
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      {currentView === 0 ? (
        <IconButton
          onClick={() => onChangeView(0)}
          className={`${classes.nav__link} ${classes.linkActive}`}
        >
          <Home />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => onChangeView(0)}
          className={classes.nav__link}
        >
          <Home />
        </IconButton>
      )}
      {/* {currentView === 1 ? (
        <IconButton
          onClick={() => onChangeView(1)}
          className={`${classes.nav__link} ${classes.linkActive}`}
        >
          <Search />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => onChangeView(1)}
          className={classes.nav__link}
        >
          <Search />
        </IconButton>
      )} */}
      {currentView === 2 ? (
        <IconButton
          onClick={() => onChangeView(2)}
          className={`${classes.nav__link} ${classes.linkActive}`}
        >
          <Person />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => onChangeView(2)}
          className={classes.nav__link}
        >
          <Person />
        </IconButton>
      )}
      {/* {currentView === 3 ? (
        <IconButton
          onClick={() => onChangeView(3)}
          className={`${classes.nav__link} ${classes.linkActive}`}
        >
          <Settings />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => onChangeView(3)}
          className={classes.nav__link}
        >
          <Settings />
        </IconButton>
      )} */}
    </nav>
  )
}

export default Nav
