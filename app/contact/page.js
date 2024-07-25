import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Contact</h1>
        <div>
          <p>
            Whether you have questions, feedback, or are interested in
            collaborating with the Future of Work Council, please dont hesitate
            to reach out. Fill out the form below or use the provided contact
            information to get in touch with us.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.form}>
          <form>
            <p><b>Hello, the Future of Work Council,</b></p>

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
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </main>
  );
}
