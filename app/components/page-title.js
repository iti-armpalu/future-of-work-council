"use client";

import { Fragment } from "react";
import styles from "./page-title.module.css";

export function PageTitle({ title, paragraphs, highlight }) {
  return (
    <div className={styles.title}>
      <div className="row g-0 h-100 w-100 align-items-center">
        <div className="col-12 col-xl-3">
          <h1>{title}</h1>
        </div>
        <div className="col-12 col-xl-9">
          {/* {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))} */}
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              {index === paragraphs.length - 1 && highlight ? (
                <>
                  {paragraph.split(highlight).map((part, i, arr) => (
                    <Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && <span>{highlight}</span>}
                    </Fragment>
                  ))}
                </>
              ) : (
                paragraph
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
