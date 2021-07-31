import useStyles from './styles'
import Image from './Image'

const Home = ({ images, master }) => {
  const classes = useStyles()

  return (
    <>
      <section className={classes.feed}>
        <div className={classes.row}>
          <Image images={images} master={master} row={1} />
        </div>
        <div className={classes.row}>
          <Image images={images} master={master} row={2} />
        </div>
        <div className={classes.row}>
          <Image images={images} master={master} row={3} />
        </div>
        <div className={classes.row}>
          <Image images={images} master={master} row={4} />
        </div>
        <div className={classes.row}>
          <Image images={images} master={master} row={5} />
        </div>
      </section>
    </>
  )
}

export default Home
