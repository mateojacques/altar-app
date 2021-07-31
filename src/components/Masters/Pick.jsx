import { useState, useEffect } from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'
import useStyles from './styles'
import { CheckRounded } from '@material-ui/icons'
import axios from 'axios'
import MasterItem from './MasterItem'

const Pick = ({ path, onMasterPicked }) => {
  const classes = useStyles()
  const [masters, setMasters] = useState([])

  useEffect(() => {
    const getMasters = async () => {
      if (path === 'manga') {
        await axios
          .get(
            'https://altar-api.netlify.app/.netlify/functions/server/api/masters'
          )
          .then((res) => {
            setMasters(res.data.manga)
          })
      } else if (path === 'comic') {
        await axios
          .get(
            'https://altar-api.netlify.app/.netlify/functions/server/api/masters'
          )
          .then((res) => {
            setMasters(res.data.comic)
          })
      }
    }
    getMasters()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Grid container direction='column'>
        <Typography
          component='h1'
          className={`${classes.title} ${classes.pickTitle}`}
        >
          CHOOSE UP TO THREE <span className={classes.span}>MASTERS</span>
        </Typography>

        <Grid
          container
          item
          justifyContent='center'
          className={classes.mastersContainer}
        >
          {masters.map((master, i) => {
            return (
              <MasterItem
                key={i}
                pic={master.pic}
                name={master.name}
                id={master.id}
              />
            )
          })}
        </Grid>

        <IconButton
          color='secondary'
          onClick={() => onMasterPicked(3)}
          className={classes.pickBtn}
        >
          <CheckRounded className={classes.pickBtn__font} />
        </IconButton>
      </Grid>
    </>
  )
}

export default Pick
