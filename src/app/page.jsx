import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container__flex}>
      <div className={styles.presentation}>
        <h1>Frontend Developer</h1>
        <p>html only with proper layaout, no styling</p>
      </div>
      <div className={styles.porfolio}>
        <div className={styles.porfolio__projects}>
          <h3 className={styles.h3}>Projects</h3>
          <div className={styles.porfolio__list}>
            <span>HTML Only Porfolio</span>
            <span>Calculator</span>
            <span>Quiz App</span>
            <span>Countdown timer</span>
            <span>Product upcoming</span>
            <p className={styles.span}>Product Upcoming Page</p>
          </div>
        </div>
        <div className={styles.porfolio__experience}>
          <h3>Work Experience</h3>
          <div className={styles.porfolio__listEx}>
            <span>roadmap.sh</span>
            <span>Solved all the frontend projects</span>
            <a href="https://github.com/">visit my profile</a>
          </div>
        </div>
        <div className={styles.porfolio__work}>
          <h3>OpenSource Work</h3>
          <div className={styles.porfolio__listEx}>
            <span>OpenSource Work</span>
            <span>Contributed to 50 opensource projects.
              Made my own projects with 200 GitHub Stars.
            </span>
            <a href="https://github.com/">visit my GitHub Profile</a>
          </div>
        </div>
        <div className={styles.porfolio__education}>
          <h3>Education</h3>
          <p>Graduado de la Univercidad de Cundinamarca</p>
          <h3>courses i tock</h3>
          <ul>
            <li>React en unas de  las diferente claves de unadifrencias de racat</li>
            <li>Angular en unas de  las diferente claves de unadifrencias de racat</li>
            <li>Vite en unas de  las diferente claves de unadifrencias de racat</li>
            <li>Next Js en unas de  las diferente claves de unadifrencias de racat</li>
            <li>Css en unas de  las diferente claves de unadifrencias de racat</li>
            <li>GrapSq len unas de  las diferente claves de unadifrencias de racat</li>
          </ul>
        </div>
      </div>
      <section className={styles.section}>
        <h2>opinione de personas que NO interesan</h2>
        <div className={styles.container}>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
          <div className={styles.card}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim quidem id! Ipsam quaerat fugit esse numquam officia. Saepe ipsam soluta omnis earum laudantium nihil ipsum obcaecati nesciunt sed rem!
            </p>
            <span>
              esta es una de la pregrado dena sde
            </span>
          </div>
      
        </div>

      </section>
    </div>
  );
}
