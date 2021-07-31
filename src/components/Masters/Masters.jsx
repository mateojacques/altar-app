import { useState, useEffect } from 'react'
import useStyles from './styles'
import Path from './Path'
import Pick from './Pick'
import UserMasters from './UserMasters'

const Masters = () => {
  const classes = useStyles()
  const [currentStep, setCurrentStep] = useState(0)
  const [userMasters, setUserMasters] = useState([])

  const goToStep = (step) => {
    setCurrentStep(step)
  }

  function handleRedirect() {
    const storage = window.localStorage
    const getUserMasters = storage.getItem('masters')
    if (getUserMasters) {
      const userMastersArray = getUserMasters.split(',')
      setUserMasters(userMastersArray)
      setCurrentStep(3)
    } else return
  }

  function handleReset() {
    const storage = window.localStorage
    storage.removeItem('masters')
    setCurrentStep(0)
  }

  useEffect(() => {
    handleRedirect()
  }, [])

  return (
    <section className={classes.masters}>
      {currentStep === 0 && <Path onPathPicked={goToStep} />}
      {currentStep === 1 && (
        <Pick onMasterPicked={handleRedirect} path='manga' />
      )}
      {currentStep === 2 && (
        <Pick onMasterPicked={handleRedirect} path='comic' />
      )}
      {currentStep === 3 && (
        <UserMasters onChangeSettings={handleReset} userMasters={userMasters} />
      )}
    </section>
  )
}

export default Masters
