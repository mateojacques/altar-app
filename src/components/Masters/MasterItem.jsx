import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'

const MasterItem = ({ pic, name, id }) => {
  const classes = useStyles()
  const storage = window.localStorage

  function handlePickMaster(e, master = '') {
    const currentMasters = storage.getItem('masters')
    let mastersArray
    if (currentMasters !== null) {
      mastersArray = currentMasters.split(',')
    }
    if (currentMasters === null) {
      storage.setItem('masters', master)
      e.target.classList.toggle(`${classes.selected}`)
    } else if (mastersArray.includes(master)) {
      if (mastersArray.length - 1 === 0) {
        storage.removeItem('masters')
        e.target.classList.toggle(`${classes.selected}`)
      } else {
        const updMasters = mastersArray.filter((item) => item !== master)
        storage.setItem('masters', updMasters)
        e.target.classList.toggle(`${classes.selected}`)
      }
    } else if (!mastersArray.includes(master)) {
      if (mastersArray.length <= 2) {
        const updMasters = [...mastersArray, master]
        storage.setItem('masters', updMasters)
        e.target.classList.toggle(`${classes.selected}`)
      }
    }
  }

  return (
    <Grid item xs={10} sm={6} lg={4} className={classes.masterItem}>
      <div
        className={classes.masterImg}
        style={{
          background: `url(${pic}) no-repeat`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        onClick={(e) => handlePickMaster(e, id)}
      ></div>

      <Typography
        variant='h5'
        color='secondary'
        className={classes.masterImg__label}
      >
        {name}
      </Typography>
    </Grid>
  )
}

export default MasterItem
