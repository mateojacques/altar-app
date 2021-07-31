import { useEffect } from 'react'
import useStyles from './styles'
import Home from '../Home/Home'
import Masters from '../Masters/Masters'

const Main = ({ currentView, onChangeView, images, master }) => {
  const classes = useStyles()

  function handleRedirect() {
    const userMasters = window.localStorage.getItem('masters')

    if (!userMasters) {
      onChangeView(2)
    }
  }

  useEffect(() => {
    handleRedirect()
  })

  return (
    <main className={classes.main}>
      {currentView === 0 && <Home images={images} master={master} />}
      {currentView === 2 && <Masters />}
    </main>
  )
}

export default Main
