import styles from "./styles.module.css";
import { PageTitle } from "../components/page-title";
import { ContactForm } from "../components/contact-form";

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
        {/* <div className={styles.form}> */}
         <ContactForm />
        {/* </div> */}
      </div>
    </main>
  );
}
