import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  info: {
    width: '100%',
    padding: '40px 10px 80px 10px',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 120,
    },
  },
  question: {
    width: 'clamp(280px, 100%, 1000px)',
    margin: '0 auto',
  },
  question__title: {
    color: theme.palette.secondary.main,
    fontSize: 'clamp(1.3rem, 6vw, 1.8rem)',
    marginBottom: 20,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  question__answer: {
    color: '#fbfbfb',
    fontSize: 'clamp(0.8rem, 5vw, 1.2rem)',
    marginBottom: 20,
  },
  question__note: {
    color: '#c3c3c3',
    fontSize: 'clamp(0.6rem, 5vw, 1rem)',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  question__highlight: {
    color: theme.palette.secondary.main,
  },
  socialLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
    marginTop: 30,
  },
  socialLink: {
    textDecoration: 'none',
    color: '#ccc',
    transition: '.3s ease',
    '&:hover': {
      color: theme.palette.secondary.light,
    },
  },
  socialLink__icon: {
    fontSize: '2.3rem',
  },
}))

export default styles
