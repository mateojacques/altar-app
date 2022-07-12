import useStyles from './styles'
import { Typography } from '@material-ui/core'
import LazyLoad from 'react-lazyload'

const Image = ({ images, row }) => {
  const classes = useStyles()

  function generateImages() {
    if (images.length < 150) {
      return (
        <Typography variant='body1' color='secondary'>
          Loading images...
        </Typography>
      )
    } else {
      if (window.innerWidth >= 1024) {
        return (
          <>
            {row === 1 &&
              images.map((img, i) => {
                if (i <= 30)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 2 &&
              images.map((img, i) => {
                if (30 < i && i <= 60)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 3 &&
              images.map((img, i) => {
                if (60 < i && i <= 90)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 4 &&
              images.map((img, i) => {
                if (90 < i && i <= 120)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 5 &&
              images.map((img, i) => {
                if (120 < i && i <= 150)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
          </>
        )
      } else if (window.innerWidth < 1024 && window.innerWidth > 600) {
        return (
          <>
            {row === 1 &&
              images.map((img, i) => {
                if (i <= 50)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 2 &&
              images.map((img, i) => {
                if (50 < i && i <= 100)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
            {row === 3 &&
              images.map((img, i) => {
                if (100 < i && i <= 150)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
          </>
        )
      } else if (window.innerWidth <= 600) {
        return (
          <>
            {row === 1 &&
              images.map((img, i) => {
                if (i <= 150)
                  return (
                    <LazyLoad key={img}>
                      <a href={img} target='_blank' rel='noreferrer'>
                        <img className={classes.img} src={img} alt={img} loading="lazy"/>
                      </a>
                    </LazyLoad>
                  )
                else {
                  return null
                }
              })}
          </>
        )
      }
    }
  }

  return generateImages()
}

export default Image
