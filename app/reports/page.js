import Image from "next/image";
import "../globals.css";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          <span>The Future of Work Council</span> specializes in the strategic application of AI to enhance business practices and optimize workforce dynamics, ensuring readiness for the evolving landscape of work.
        </h1>
        
      </div>
      <div className="flex">
        <p>
          Our partners consist of leading organizations and industry experts committed to collaborating with us in shaping the future of work through innovative solutions and insights.
        </p>
        <button>
          Our partners
        </button>
      </div>
    </main>
  );
}
