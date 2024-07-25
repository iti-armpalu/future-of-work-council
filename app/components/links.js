"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./links.module.css";

export function Links() {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link
            className={`${pathname === "/about" ? `${styles.active}` : ""}`}
            href="/about"
            prefetch={false}
          >
            About the Council
          </Link>
        </li>
        <li>
          <Link 
            className={`${pathname === "/activities" ? `${styles.active}` : ""}`} 
            href="/activities"
            prefetch={false}
          >
            Council Activities
          </Link>
        </li>
        <li>
          <Link 
            className={`${pathname === "/partners" ? `${styles.active}` : ""}`} 
            href="/partners"
            prefetch={false}
          >
            Partners
          </Link>
        </li>
        <li>
          <Link 
            className={`${pathname === "/reports" ? `${styles.active}` : ""}`} 
            href="/reports"
            prefetch={false}
          >
            Reports & Insights
          </Link>
        </li>
        <li>
          <Link 
            className={`${pathname === "/contact" ? `${styles.active}` : ""}`} 
            href="/contact"
            prefetch={false}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
