import useStyles from './styles'

const Image = ({ images, row }) => {
  const classes = useStyles()
  return (
    <>
      {row === 1 &&
        images.map((img, i) => {
          if (i <= 30)
            return (
              <a href={img} target='_blank' rel='noreferrer' key={img}>
                <img className={classes.img} src={img} alt={img} />
              </a>
            )
          else {
            return null
          }
        })}
      {row === 2 &&
        images.map((img, i) => {
          if (30 < i && i <= 60)
            return (
              <a href={img} target='_blank' rel='noreferrer' key={img}>
                <img className={classes.img} src={img} alt={img} />
              </a>
            )
          else {
            return null
          }
        })}
      {row === 3 &&
        images.map((img, i) => {
          if (60 < i && i <= 90)
            return (
              <a href={img} target='_blank' rel='noreferrer' key={img}>
                <img className={classes.img} src={img} alt={img} />
              </a>
            )
          else {
            return null
          }
        })}
      {row === 4 &&
        images.map((img, i) => {
          if (90 < i && i <= 120)
            return (
              <a href={img} target='_blank' rel='noreferrer' key={img}>
                <img className={classes.img} src={img} alt={img} />
              </a>
            )
          else {
            return null
          }
        })}
      {row === 5 &&
        images.map((img, i) => {
          if (120 < i && i <= 150)
            return (
              <a href={img} target='_blank' rel='noreferrer' key={img}>
                <img className={classes.img} src={img} alt={img} />
              </a>
            )
          else {
            return null
          }
        })}
    </>
  )
}

export default Image
