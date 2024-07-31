// PageTitle is designed to display a title and an optional set of paragraphs, with the ability to highlight a specific word or phrase in the last paragraph.

"use client";

import { Fragment } from "react";
import styles from "./page-title.module.css";

export function PageTitle({ title, paragraphs = [], highlight = "" }) {
  return (
    <div className={styles.title}>
      <div className="row g-0 h-100 w-100 align-items-center">
        <div className="col-12 col-xl-3">
          <h1>{title}</h1>
        </div>
        {paragraphs.length > 0 && (
          <div className="col-12 col-xl-9">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {highlight ? (
                  <>
                    {paragraph.split(highlight).map((part, i, arr) => (
                      <Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className={styles.highlight}>{highlight}</span>}
                      </Fragment>
                    ))}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
