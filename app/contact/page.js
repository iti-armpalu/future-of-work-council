import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";
import { Button } from "../components/ui/button";

export default function Page() {
  const title = "Contact";
  const paragraphs = [
    "Whether you have questions, feedback, or are interested in collaborating with the Future of Work Council, please dont hesitate to reach out.",
    "Fill out the form below or use the provided contact information to get in touch with us.",
  ];

  return (
    <main className={styles.main}>
      <PageTitle title={title} paragraphs={paragraphs} />
      <div className={styles.section}>
        <div className={styles.form}>
          <form>
            <p>
              <b>Hello, the Future of Work Council</b>
            </p>

            <p>
              My name is
              <input placeholder="John Doe" type="text" id="name" name="name" />
            </p>
            <p>
              {" "}
              and my email is
              <input
                className={styles.newline}
                placeholder="john.doe@example.com"
                type="email"
                id="email"
                name="email"
              />
            </p>
            <p>
              I would like to reach out to you about
              <input
                placeholder="something something"
                type="text"
                id="subject"
                name="subject"
              />
            </p>

            <p className={styles.newline}>
              Here are some more details:
              <input
                placeholder="something something"
                // rows="1"
                type="text"
                id="message"
                name="message"
              />
            </p>
            <Button variant="primary">
              Send
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
