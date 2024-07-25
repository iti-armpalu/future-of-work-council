import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="row g-0 h-100 w-100 align-items-center">
          <div className="col-12 col-xl-3">
            <h1>Council Activities</h1>
          </div>

          <div className="col-12 col-xl-9">
            <p>
              The Future of Work Council aims to drive conversation,
              collaboration, and action towards building a more inclusive,
              resilient, and sustainable future of work for all through
              multifaceted activities.
            </p>
          </div>
        </div>
      </div>

      <div className="row g-0 h-100 w-100">
        <div className={styles.section}>
          <div className={styles.activities}>
            <div className={styles.activity}>
              <h6>Research & Analysis</h6>
              <p>
                Conducting in-depth studies and analysis on emerging trends,
                technologies, and practices shaping the future of work.
              </p>
              <p>
                Publishing white papers, reports, and insights to share findings
                with stakeholders and the wider community.
              </p>
            </div>
            <div className={styles.activity}>
              <h6>Thought Leadership</h6>
              <p>
                Hosting webinars and panel discussions featuring thought leaders
                and experts in the field of work and technology.
              </p>
              <p>
                Contributing articles, blogs, and op-eds to industry
                publications to share expertise and perspectives on key issues.
              </p>
            </div>
            <div className={styles.activity}>
              <h6>Collaboration & Partnerships</h6>
              <p>
                Engaging with industry partners, and academic institutions to
                collaborate on research projects, initiatives, and policy
                recommendations.
              </p>
              <p>
                Cultivating a network of stakeholders and advocates committed to
                advancing the future of work agenda.
              </p>
            </div>
            <div className={styles.activity}>
              <h6>Advocacy & Policy</h6>
              <p>
                Advocating for policies and initiatives that support workforce
                development, skills training, and equitable access to
                opportunities in the digital economy.
              </p>
              <p>
                Advising policymakers and stakeholders on the implications of
                technological advancements on the future of work.
              </p>
            </div>
            <div className={styles.activity}>
              <h6>Community Engagement</h6>
              <p>
                Organizing workshops and networking events to engage with the
                community and foster dialogue on pressing issues.
              </p>
              <p>
                Providing resources, tools, and support to individuals and
                organizations seeking to adapt and thrive in the evolving
                workplace.
              </p>
            </div>
            <div className={styles.activity}>
              <h6>Innovation & Experimentation</h6>
              <p>
                Exploring innovative technologies, models, and practices to
                enhance productivity, collaboration, and well-being in the
                workplace.
              </p>
              <p>
                Supporting pilot projects and experiments to test new approaches
                and solutions for the future of work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
