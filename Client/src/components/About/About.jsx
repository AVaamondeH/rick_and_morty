/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./About.module.css"
import {GrFacebook} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const About = () => {
    return (
        <div className={styles.container}>
      <div className={styles.card}>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ea08e12-847b-4c43-8433-ff86b833fd7b/dfhm5og-95de576c-86eb-49ab-ad37-a9cb02ef0853.png/v1/fill/w_389,h_400,q_70,strp/jinx__arcane__by_blue_leader97_dfhm5og-400t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzFlYTA4ZTEyLTg0N2ItNGM0My04NDMzLWZmODZiODMzZmQ3YlwvZGZobTVvZy05NWRlNTc2Yy04NmViLTQ5YWItYWQzNy1hOWNiMDJlZjA4NTMucG5nIiwid2lkdGgiOiI8PTEyNDUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._YYKfnTX_egwrxPgJhq65nB88k7GAICdxiY24x5OYX0"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.name}>Alex Vaamonde</h2>
          <p className={styles.description}>
            Hola soy Alex y estoy en mi camino por convertirme en programador, un gusto.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/AVaamondeH" className={styles.socialLink}>
                <BsGithub/>
            </a>
            <a href="#" className={styles.socialLink}>
                <GrFacebook/>
            </a>
            <a href="https://www.linkedin.com/in/alexxvaam/" className={styles.socialLink}>
              <BsLinkedin/>
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About