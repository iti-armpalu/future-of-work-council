import Image from "next/image";
import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";

export default function Page() {
  const title = "About the Future of Work Council";
  const paragraphs = [
    "In today’s rapidly evolving world, the future of work presents both exciting opportunities and complex challenges. The need for adaptation and innovation in how we work, collaborate, and thrive has never been more pressing. This is where the Future of Work Council steps in.",
    "Our council serves as a collaborative platform and think tank, bringing together diverse perspectives, expertise, and resources to navigate the complexities of the future of work landscape.",
    "We recognize that no single entity or individual has all the answers, which is why we believe in the power of collective intelligence and collaboration.",
  ];
  const highlight =
    "We recognize that no single entity or individual has all the answers, which is why we believe in the power of collective intelligence and collaboration.";
  const founders = [
    {
      name: "Roy Armale",
      title: "SVP Products and Platforms at WPP",
      image: "/images/Roy-Armale.jpeg",
    },
    {
      name: "Roy Armale",
      title: "SVP Products and Platforms at WPP",
      image: "/images/Roy-Armale.jpeg",
    },
    {
      name: "Roy Armale",
      title: "SVP Products and Platforms at WPP",
      image: "/images/Roy-Armale.jpeg",
    },
  ];

  return (
    <main className={styles.main}>
      <PageTitle title={title} paragraphs={paragraphs} highlight={highlight} />
      <section className={`row g-0 h-100 w-100 ${styles.section}`}>
        <div className="col-md-1">
          <h4>Founders</h4>
        </div>
        <div className={`col-md-11 ${styles.profiles}`}>
          {founders.map((founder, index) => (
            <div key={index} className={styles.profile}>
              <h6>{founder.name}</h6>
              <p>{founder.title}</p>
              <Image
                src={founder.image}
                width={228}
                height={280}
                alt={`Portrait of ${founder.name}`}
              />
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
