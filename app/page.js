import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css";
import { Button } from "./components/ui/button";

export default function Page() {
  return (
    <main className={styles.main}>
      {/* <Image
        src="./images/GT_ABSTRACT_FORM-40.svg"
        width={1350}
        height={1350}
        alt=""
        className={styles.img}
      /> */}

      <div className={styles.hero}>
        <h1>
          <span>The Future of Work Council</span> specializes in the strategic
          application of AI to enhance business practices and optimize workforce
          dynamics, ensuring readiness for the evolving landscape of work.
        </h1>
      </div>
      <div className="d-flex flex-column flex-lg-row mb-4">
        <p>
          Our partners consist of leading organizations and industry experts
          committed to collaborating with us in shaping the future of work
          through innovative solutions and insights.
        </p>
        <Button link="/partners">Our partners</Button>
      </div>
    </main>
  );
}
