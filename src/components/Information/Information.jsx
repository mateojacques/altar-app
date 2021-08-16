import { MailRounded, LinkedIn, GitHub } from '@material-ui/icons'
import useStyles from './styles'

const Information = () => {
  const styles = useStyles()
  return (
    <section className={styles.info}>
      <div className={styles.question}>
        <h3 className={styles.question__title}>WHAT IS ALTAR?</h3>

        <p className={styles.question__answer}>
          <span className={styles.question__highlight}>Altar </span> is a web
          application that facilitates the task of gathering a single artist's
          artworks to be used as a reference for art studies. Our philosophy is
          based on the 'learning art by copying the masters' method, which
          encourages begginer artists to try and recreate professional
          illustrations, going over the same process as the original artist did,
          understanding his/her choices and building muscle memory on the
          subject.
        </p>

        <p className={styles.question__note}>
          This is just a demo for the application. Right now it only supports
          Manga and Comic artists. We are currently seeking for real interest
          from our target audience to move on into various art styles and make
          this into a full-fledged native (web and software) application,
          however the main functionality is implemented here.
        </p>
      </div>

      <div className={styles.question}>
        <h3 className={styles.question__title}>WHY WOULD IT BE USEFUL?</h3>

        <p className={styles.question__answer}>
          In paper, it seems really easy to just look up for your favourite
          artist drawings or paintings and start replicating it. But the
          Internet is a large place, and what it seems like a simple task to
          begin with, suddenly becames difficult and unproductive.
        </p>

        <p className={styles.question__answer}>
          Many things can happen while you search for artworks on sites like
          Google or Pinterest. Pretty often you will encounter fanart disguised
          as original artwork from an artist; be suggested "related" art that,
          in fact, has nothing to do with what you're looking for and/or
          distract yourself from your task, spending a lot of time just looking
          at gorgeous drawings and paintings, or even photos.
        </p>

        <p className={styles.question__answer}>
          In Altar, you are presented with a collection of works that was
          handpicked from public sources, so you can jump straight to making art
          without having to deal with the inconveniences of the web.
        </p>
      </div>

      <div className={styles.question}>
        <h3 className={styles.question__title}>HOW DO I USE IT?</h3>

        <p className={styles.question__answer}>
          The first time you load the page, you should pick three artists or
          <span className={styles.question__highlight}> masters</span> whose
          artworks you'd want to replicate. The site will remember your choice
          and then, when you navigate into your feed using the Home icon, you
          will see 50 illustrations from each master. These aren't labeled, but
          can be easily identified by art style or theme. You can change your
          <span className={styles.question__highlight}> path</span> and{' '}
          <span className={styles.question__highlight}> masters </span>
          choices any moment you want to.
        </p>

        <p className={styles.question__note}>
          Loading the feed can take a while. This is a demo and we are working
          on improving the performance of the app. Until further notice, it is
          advised to let the page load correctly the first time after selecting
          new masters and updating the data.
        </p>
      </div>

      <div className={styles.question}>
        <h3 className={styles.question__title}>
          I WANT TO CONTRIBUTE TO THIS PROJECT!
        </h3>

        <p className={styles.question__answer}>
          Thanks! You can get in touch with me, the developer behind the
          project, using these links:
        </p>

        <div className={styles.socialLinks}>
          <a
            href='mailto:mateojacquesweb@gmail.com'
            target='_blank'
            rel='noreferrer'
            className={styles.socialLink}
          >
            <MailRounded className={styles.socialLink__icon} />
          </a>
          <a
            href='https://linkedin.com/in/mateoleonjacques'
            target='_blank'
            rel='noreferrer'
            className={styles.socialLink}
          >
            <LinkedIn className={styles.socialLink__icon} />
          </a>
          <a
            href='https://github.com/mateojacques'
            target='_blank'
            rel='noreferrer'
            className={styles.socialLink}
          >
            <GitHub className={styles.socialLink__icon} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Information
