import { Typography, Grid, Link } from '@material-ui/core'
import useStyles from './styles'

const UserMasterItem = ({ master }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      item
      sm={8}
      lg={3}
      className={classes.userMasterItem}
      justifyContent='center'
    >
      <Grid
        item
        xs={12}
        className={classes.userMasterItem__imgContainer}
        style={{
          backgroundImage: `url(${master.pic})`,
          backgroundSize: '100%',
        }}
      >
        {/* <img
          src={master.pic}
          alt={master.name}
          className={classes.userMasterItem__img}
        /> */}
      </Grid>
      <Grid
        container
        item
        xs={12}
        className={classes.userMasterItem__info}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Link
          href={`https://www.google.com/search?q=${master.name}`}
          target='_blank'
          rel='noreferrer'
          underline='none'
        >
          <Typography
            variant='h3'
            className={classes.userMasterItem__title}
            gutterBottom
          >
            {master.name}
          </Typography>
        </Link>
        <Typography variant='body1' className={classes.userMasterItem__desc}>
          {master.desc}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default UserMasterItem
