"use client";

import Link from "next/link";
import styles from "./header.module.css";
import { Links } from "./links";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Link href="/" prefetch={false}>
            The Future of Work Council
          </Link>
        </div>
        <Links />
      </div>
      <div className={styles.social}>
        <Link href="/" prefetch={false}>
          LinkedIn
        </Link>
        <Link href="/" prefetch={false}>
          Twitter
        </Link>
      </div>
    </header>
  );
}
