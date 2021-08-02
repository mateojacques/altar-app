import useStyles from './styles'
import Image from './Image'

const Home = ({ images, master }) => {
  const classes = useStyles()
  const viewport = window.innerWidth

  return (
    <>
      <section className={classes.feed}>
        {viewport > 1366 && (
          <>
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
          </>
        )}

        {viewport <= 1366 && viewport > 1024 && (
          <>
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
          </>
        )}

        {viewport <= 1024 && viewport > 768 && (
          <>
            <div className={classes.row}>
              <Image images={images} master={master} row={1} />
            </div>
            <div className={classes.row}>
              <Image images={images} master={master} row={2} />
            </div>
            <div className={classes.row}>
              <Image images={images} master={master} row={3} />
            </div>
          </>
        )}

        {viewport <= 768 && viewport > 600 && (
          <>
            <div className={classes.row}>
              <Image images={images} master={master} row={1} />
            </div>
            <div className={classes.row}>
              <Image images={images} master={master} row={2} />
            </div>
          </>
        )}

        {viewport <= 600 && (
          <>
            <div className={classes.row}>
              <Image images={images} master={master} row={1} />
            </div>
          </>
        )}

        {/* <div className={classes.row}>
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
        </div> */}
      </section>
    </>
  )
}

export default Home
