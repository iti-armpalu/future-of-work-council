import Link from "next/link";
import styles from "./card.module.css";

export const Card = ({ title, linkText, linkHref, cardDelay }) => (
  <div
    className={styles.card}
    style={{ animationDelay: `${cardDelay + 0.1}s` }}
  >
    <p style={{ animationDelay: `${cardDelay + 0.3}s` }}>{title}</p>
    <Link
      href={linkHref}
      prefetch={false}
      legacyBehavior
      style={{ animationDelay: `${cardDelay + 0.5}s` }}
    >
      <a target="_blank" rel="noreferrer">
        {linkText}
      </a>
    </Link>
  </div>
);

export default Card;
