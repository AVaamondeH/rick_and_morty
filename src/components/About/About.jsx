import styles from "./About.module.css"
import {GrFacebook} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const About = () => {
    return (
        <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="../../resourses/profile.png"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.name}>Nombre</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            aliquam sagittis nisi, vel eleifend turpis facilisis et. Duis vitae
            mattis lectus, id consequat ex. Donec non fermentum elit.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
                <BsGithub/>
            </a>
            <a href="#" className={styles.socialLink}>
                <GrFacebook/>
            </a>
            <a href="#" className={styles.socialLink}>
              <BsLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About