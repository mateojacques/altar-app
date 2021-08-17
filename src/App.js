import { useState, useEffect } from 'react'
import { Navbar, Main } from './components'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import axios from 'axios'
import shuffle from 'shuffle-array'

import theme from './theme'

function App() {
  const [currentView, setCurrentView] = useState(0)
  const [images, setImages] = useState([])

  const changeView = (view) => {
    if (view === 0) window.location.reload()
    setCurrentView(view)
  }

  useEffect(() => {
    function getMasterOne() {
      const userMasters = window.localStorage.getItem('masters')

      if (userMasters) {
        const mastersArray = userMasters.split(',')
        axios
          .get(
            `https://altar-api.netlify.app/.netlify/functions/server/api/images/${mastersArray[0]}`
          )
          .then((res) => {
            const fetchedImages = res.data.images
            shuffle(fetchedImages)
            setImages(fetchedImages)
          })
      }
    }

    function getMasterTwo() {
      const userMasters = window.localStorage.getItem('masters')

      if (userMasters) {
        const mastersArray = userMasters.split(',')
        axios
          .get(
            `https://altar-api.netlify.app/.netlify/functions/server/api/images/${mastersArray[1]}`
          )
          .then((res) => {
            const fetchedImages = res.data.images
            const shuffledFetchedImages = shuffle(fetchedImages)
            const shuffledImages = shuffle(images)
            setImages([...shuffledImages, ...shuffledFetchedImages])
          })
      }
    }

    function getMasterThree() {
      const userMasters = window.localStorage.getItem('masters')

      if (userMasters) {
        const mastersArray = userMasters.split(',')
        axios
          .get(
            `https://altar-api.netlify.app/.netlify/functions/server/api/images/${mastersArray[2]}`
          )
          .then((res) => {
            const fetchedImages = res.data.images
            const shuffledFetchedImages = shuffle(fetchedImages)
            const shuffledImages = shuffle(images)
            setImages([...shuffledImages, ...shuffledFetchedImages])
          })
      }
    }

    function randomize() {
      setImages(shuffle(images))
    }

    if (images.length < 50) getMasterOne()
    if (images.length >= 50 && images.length < 100) getMasterTwo()
    if (images.length >= 100 && images.length < 150) getMasterThree()
    if (images.length < 150) randomize()
  }, [images])

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar currentView={currentView} onChangeView={changeView} />
        <Main
          currentView={currentView}
          onChangeView={changeView}
          images={images}
        />
      </ThemeProvider>
    </>
  )
}

export default App
