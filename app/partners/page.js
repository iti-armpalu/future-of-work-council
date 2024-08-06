import Image from "next/image";
import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";
import { Button } from "../components/ui/button";

export default function Page() {
  const title = "Partners";

  const imageSources = [
    "/images/stari.svg",
    "/images/asgardia.svg",
    "/images/light-AI.svg",
    "/images/radiyal.svg",
    "/images/atica.svg",
    "/images/velocity.svg",
  ];

  return (
    <main className={styles.main}>
      <PageTitle title={title} />
      <div className="row g-0 h-100 w-100">
        <div className="col-12 col-xl-7">
          <div className={styles.partners}>
            <div className={styles.intro}>
              <p>
                Partnerships are at the heart of our mission at the Future of
                Work Council. We believe that collaborating with leading
                organizations, industry experts, and like-minded entities is
                essential for driving meaningful change and innovation in the
                landscape of work.
              </p>
              <p>
                By joining forces with diverse partners, we can leverage
                collective expertise, resources, and networks to address complex
                challenges and seize opportunities in the evolving world of
                work.
              </p>
              <p>
                Our partners play a crucial role in co-creating solutions,
                sharing insights, and amplifying the impact of our initiatives.
                Together, we strive to foster a dynamic and inclusive future of
                work that benefits individuals, businesses, and society as a
                whole.
              </p>
              <p>
                Whether itss through strategic alliances, joint research
                projects, or collaborative events, our partnerships enable us to
                stay at the forefront of innovation and drive positive change in
                the way we work, live, and thrive in the digital age.
              </p>
            </div>
            <div className={styles.become}>
              <p>
                Join us in shaping the future of work by becoming a partner
                today!
              </p>
              <Button link="/contact">Send partnership request</Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className={styles.logos}>
            {imageSources.map((src, index) => (
              <div
                key={index}
                className={styles.logoContainer}
              >
                <Image
                  src={src}
                  alt="Logo"
                  fill
                  className={styles.logo}
                  style={{ animationDelay: `${0.1 + 0.2 * index}s` }} // Set delay dynamically
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
