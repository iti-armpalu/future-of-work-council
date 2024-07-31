"use client";

import Link from "next/link";
import styles from "./button.module.css";
import { useState } from "react";

export function Button(props) {

  const { link, variant = 'primary', onClick, children, isMenuButton } = props;

  const [isOpen, setIsOpen] = useState(false);

  const btnClass = variant;

  const handleClick = () => {
    if (isMenuButton) {
      setIsOpen(!isOpen);
    }
    if (onClick) {
      onClick();
    }
  };

  if (link) {
    return (
      <Link 
        href={link}
        prefetch={false}
        className={`${styles.btn} ${styles[btnClass]}`}>
          {children}
      </Link>
    );
  }

  return (
    // <button 
    //   className={`${styles.btn} ${styles[btnClass]}`}
    //   onClick={onClick}>
    //     {children}
    // </button>

    <button 
      className={`${styles.btn} ${styles[btnClass]}`}
      onClick={handleClick}>
        {children}
        {isMenuButton && (
          <div className={`${styles.menuIcon} ${isOpen ? styles.open : styles.closed}`}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        )}
    </button>
  );
}
