import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Partners</h1>
      </div>

      <div className="row g-0 h-100 w-100">
        <div className="col-12 col-xl-7">
          <div className={styles.partners}>
            <div>
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
            <div className={styles.becomePartner}>
              <p>
                Join us in shaping the future of work by becoming a partner
                today!
              </p>
              <button>Send partnership request</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className={styles.logos}>
            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/airbnb-2-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/microsoft-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/visa-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/spotify-1-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/airbnb-2-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <div
              style={{
                position: "relative",
                margin: "1rem",
                width: `${100}px`,
                height: `${100}px`,
              }}
            >
              <Image
                src="/images/microsoft-logo-svgrepo-com.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

          

           
          </div>
        </div>
      </div>

   
    </main>
  );
}
