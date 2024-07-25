import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="row g-0 h-100 w-100 align-items-center">
          <div className="col-12 col-xl-3">
            <h1>Reports & Insights</h1>
          </div>

          <div className="col-12 col-xl-9">
            <p>
              This dedicated space is designed to provide you with valuable
              resources and information to shed light on the evolving landscape
              of work. Explore the latest trends, challenges, and opportunities
              shaping the future of work.
            </p>
            <p>
              Whether you are a business leader, policymaker, academic, or
              simply interested in the future of work, our reports and insights
              offer the knowledge and perspectives you need to navigate and
              thrive in a rapidly changing world.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <h4>Reports</h4>
          <div className="d-flex flex-wrap">
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h4>Events</h4>
          <div className="d-flex flex-wrap">
            <div className={styles.card}>
              <p>01 May 2024: The Future of Work Council Event</p>
              <Link href="/" prefetch={false}>
                Register your interest
              </Link>
            </div>
            <div className={styles.card}>
              <p>01 May 2024: The Future of Work Council Event</p>
              <Link href="/" prefetch={false}>
                Register your interest
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h4>Reports</h4>
          <div className="d-flex flex-wrap">
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
            <div className={styles.card}>
              <p>
                McKinsey Global Institute: Generative AI and the future of work
                in America
              </p>
              <Link href="/" prefetch={false}>
                Read report
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
