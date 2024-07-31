
import Card from "./card";
import styles from "./section.module.css";

export const Section = ({ title, items }) => (
  <div className={styles.section}>
    <h4>{title}</h4>
    <div className="d-flex flex-wrap">
      {items.map((item, index) => {
        const cardDelay = 0.3 * index; // Adjust delay increment as needed

        return (
          <Card
            key={index}
            {...item}
            cardDelay={cardDelay}
          />
        );
      })}
    </div>
  </div>
);

