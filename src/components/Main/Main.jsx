import { useEffect } from 'react'
import useStyles from './styles'
import Home from '../Home/Home'
import Masters from '../Masters/Masters'
import Information from '../Information/Information'

const Main = ({ currentView, onChangeView, images, master }) => {
  const classes = useStyles()

  function handleRedirect() {
    const userMasters = window.localStorage.getItem('masters')

    if (!userMasters && currentView === 0) {
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
      {currentView === 3 && <Information />}
    </main>
  )
}

export default Main
