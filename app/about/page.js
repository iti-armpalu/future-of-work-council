import Image from "next/image";
import "../globals.css";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="row g-0 h-100 w-100 align-items-center">
          <div className="col-12 col-xl-3">
            <h1>About the Future of Work Council</h1>
          </div>

          <div className="col-12 col-xl-9">
            <p>
              In todays rapidly evolving world, the future of work presents both
              exciting opportunities and complex challenges. The need for
              adaptation and innovation in how we work, collaborate, and thrive
              has never been more pressing. This is where the Future of Work
              Council steps in.
            </p>
            <p>
              Our council serves as a collaborative platform and think tank,
              bringing together diverse perspectives, expertise, and resources
              to navigate the complexities of the future of work landscape.
            </p>
            <p>
              <span>
                We recognize that no single entity or individual has all the
                answers, which is why we believe in the power of collective
                intelligence and collaboration.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={`row g-0 h-100 w-100 ${styles.section}`}>
        <div className="col-md-1">
          <h4>Founders</h4>
        </div>
        <div className={`col-md-11 ${styles.profiles}`}>
          <div className={styles.profile}>
            <h6>Roy Armale</h6>
            <p>SVP Products and Platforms at WPP</p>
            <Image
              src="/images/Roy-Armale.jpeg"
              width={228}
              height={280}
              alt=""
            />
            <div className={styles.overlay}></div>
          </div>

          <div className={styles.profile}>
            <h6>Roy Armale</h6>
            <p>SVP Products and Platforms at WPP</p>
            <Image
              src="/images/Roy-Armale.jpeg"
              width={228}
              height={280}
              alt=""
            />
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.profile}>
            <h6>Roy Armale</h6>
            <p>SVP Products and Platforms at WPP</p>
            <Image
              src="/images/Roy-Armale.jpeg"
              width={228}
              height={280}
              alt=""
            />
            <div className={styles.overlay}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
