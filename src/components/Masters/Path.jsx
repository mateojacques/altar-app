import { Typography, Grid } from '@material-ui/core'
import comicImg from '../../assets/comicImg.png'
import mangaImg from '../../assets/mangaImg.png'
import useStyles from './styles'

const Path = ({ onPathPicked }) => {
  const classes = useStyles()
  return (
    <>
      <Typography
        component='h1'
        variant='h1'
        className={`${classes.title} ${classes.pathTitle}`}
      >
        CHOOSE YOUR <span className={classes.span}>PATH</span>
      </Typography>

      <Grid container justifyContent='center' className={classes.boxes}>
        <Grid
          container
          item
          xl={4}
          className={classes.box}
          justifyContent='center'
          alignItems='center'
          style={{ background: `url(${mangaImg})` }}
          onClick={() => onPathPicked(1)}
        >
          <Typography variant='h2' className={classes.boxTitle}>
            MANGA
          </Typography>
        </Grid>

        <Grid
          container
          item
          xl={4}
          className={classes.box}
          justifyContent='center'
          alignItems='center'
          style={{ background: `url(${comicImg})` }}
          onClick={() => onPathPicked(2)}
        >
          <Typography variant='h2' className={classes.boxTitle}>
            COMIC
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Path
