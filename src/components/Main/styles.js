import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  main: {
    width: '100%',
    height: '100vh',
    overflowY: 'scroll',
    backgroundColor: `${theme.palette.primary.main}`,
  },
}))

export default styles
