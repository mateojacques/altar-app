import useStyles from './styles'
import Logo from '../Logo'
import Nav from './Nav'

const Navbar = ({ currentView, onChangeView }) => {
  const classes = useStyles()
  return (
    <div className={classes.navbar}>
      <Logo width='32' height='32' color='#F7C930' top='30' left='30' />
      <Nav currentView={currentView} onChangeView={onChangeView} />
    </div>
  )
}

export default Navbar
