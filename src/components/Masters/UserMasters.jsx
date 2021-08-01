import { useState, useEffect } from 'react'
import { Typography, Grid, Button } from '@material-ui/core'
import axios from 'axios'
import useStyles from './styles'
import UserMasterItem from './UserMasterItem'

const UserMasters = ({ onChangeSettings, userMasters }) => {
  const classes = useStyles()
  const [masterOne, setMasterOne] = useState({})
  const [masterTwo, setMasterTwo] = useState({})
  const [masterThree, setMasterThree] = useState({})

  async function getMasterData(id, index) {
    await axios
      .get(
        `https://altar-api.netlify.app/.netlify/functions/server/api/images/${id}`
      )
      .then((res) => {
        let name
        let desc
        let pic
        switch (index) {
          case 1:
            name = res.data.name
            desc = res.data.description
            pic = res.data.pic
            setMasterOne({ name, desc, pic })
            break
          case 2:
            if (userMasters.length > 1) {
              name = res.data.name
              desc = res.data.description
              pic = res.data.pic
              setMasterTwo({ name, desc, pic })
            } else {
              return
            }
            break
          case 3:
            if (userMasters.length > 2) {
              name = res.data.name
              desc = res.data.description
              pic = res.data.pic
              setMasterThree({ name, desc, pic })
            } else {
              return
            }
            break
          default:
            return
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMasterData(userMasters[0], 1)
    if (userMasters[1]) {
      getMasterData(userMasters[1], 2)
    }
    if (userMasters[2]) {
      getMasterData(userMasters[2], 3)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        className={classes.userMasters__header}
      >
        <Typography component='h1' variant='h2' className={classes.title}>
          YOUR <span className={classes.span}>ALTAR</span>
        </Typography>

        <Button
          variant='outlined'
          color='secondary'
          size='large'
          onClick={onChangeSettings}
        >
          CHANGE SETTINGS
        </Button>
      </Grid>

      <Grid container className={classes.userMastersContainer}>
        <UserMasterItem master={masterOne} />
        {userMasters.length > 1 && <UserMasterItem master={masterTwo} />}
        {userMasters.length > 2 && <UserMasterItem master={masterThree} />}
      </Grid>
    </>
  )
}

export default UserMasters
