import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";
import { Section } from "../components/ui/section";

export default function Page() {
  const title = "Reports & Insights";

  const paragraphs = [
    " This dedicated space is designed to provide you with valuable resources and information to shed light on the evolving landscape of work. Explore the latest trends, challenges, and opportunities shaping the future of work.",
    "Whether you are a business leader, policymaker, academic, or simply interested in the future of work, our reports and insights offer the knowledge and perspectives you need to navigate andthrive in a rapidly changing world.",
  ];

  const reports = [
    {
      title:
        "McKinsey Global Institute: Generative AI and the future of work in America",
      linkText: "Read report",
      linkHref:
        "https://www.mckinsey.com/mgi/our-research/generative-ai-and-the-future-of-work-in-america",
    },
    {
      title: "BCG: The Next 50 Years of Work",
      linkText: "Read report",
      linkHref:
        "https://www.bcg.com/publications/2024/foreseeing-future-work-opportunities",
    },
    {
      title:
        "The future of work isn’t powered by AI. It’s powered by people enabled by AI",
      linkText: "Read report",
      linkHref:
        "https://fortune.com/2024/03/18/mpw-summit-guild-ai-future-of-work/",
    },
  ];

  const events = [
    {
      title: "New event coming soon",
      linkText: "Register your interest",
      linkHref: "/",
    }
  ];

  return (
    <main className={styles.main}>
      <PageTitle title={title} paragraphs={paragraphs} />
      <div>
        <Section title="Reports" items={reports} />
        <Section title="Events" items={events} />
      </div>
    </main>
  );
}
