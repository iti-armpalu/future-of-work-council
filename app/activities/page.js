import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";

export default function Page() {
  const title = "Council Activities";
  const paragraphs = [
    "The Future of Work Council aims to drive conversation, collaboration, and action towards building a more inclusive, resilient, and sustainable future of work for all through multifaceted activities.",
  ];

  const activities = [
    {
      title: "Research & Analysis",
      descriptions: [
        "Conducting in-depth studies and analysis on emerging trends, technologies, and practices shaping the future of work.",
        "Publishing white papers, reports, and insights to share findings with stakeholders and the wider community.",
      ],
    },
    {
      title: "Thought Leadership",
      descriptions: [
        "Hosting webinars and panel discussions featuring thought leaders and experts in the field of work and technology.",
        "Contributing articles, blogs, and op-eds to industry publications to share expertise and perspectives on key issues.",
      ],
    },
    {
      title: "Collaboration & Partnerships",
      descriptions: [
        "Engaging with industry partners, and academic institutions to collaborate on research projects, initiatives, and policy recommendations.",
        "Cultivating a network of stakeholders and advocates committed to advancing the future of work agenda.",
      ],
    },
    {
      title: "Advocacy & Policy",
      descriptions: [
        "Advocating for policies and initiatives that support workforce development, skills training, and equitable access to opportunities in the digital economy.",
        "Advising policymakers and stakeholders on the implications of technological advancements on the future of work.",
      ],
    },
    {
      title: "Community Engagement",
      descriptions: [
        "Organizing workshops and networking events to engage with the community and foster dialogue on pressing issues.",
        "Providing resources, tools, and support to individuals and organizations seeking to adapt and thrive in the evolving workplace.",
      ],
    },
    {
      title: "Innovation & Experimentation",
      descriptions: [
        "Exploring innovative technologies, models, and practices to enhance productivity, collaboration, and well-being in the workplace.",
        "Supporting pilot projects and experiments to test new approaches and solutions for the future of work.",
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <PageTitle title={title} paragraphs={paragraphs} />
      <div className="row g-0 h-100 w-100">
        <div className={styles.section}>
          <div className={styles.activities}>
            {activities.map((activity, index) => {
              const cardDelay = 0.3 * index; // Adjust delay increment as needed
              return (
                <div
                  key={index}
                  className={styles.card}
                  style={{ animationDelay: `${cardDelay}s` }}
                >
                  <h6 style={{ animationDelay: `${cardDelay + 0.3}s` }}>
                    {activity.title}
                  </h6>
                  {activity.descriptions.map((desc, idx) => (
                    <p
                      key={idx}
                      style={{ animationDelay: `${cardDelay + 0.5 + 0.1 * idx}s` }}
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
