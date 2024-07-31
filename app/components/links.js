"use client";


import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./links.module.css";

export function Links() {
  const pathname = usePathname();

  const links = ["about", "activities", "partners", "reports", "contact"]

  return (
    <ul className={styles.list}>
    {links.map((path, index) => (
        <li key={path} style={{ animationDelay: `${index * 0.2}s` }}>
        <Link
          className={pathname === `/${path}` ? styles.active : ""}
          href={`/${path}`}
          prefetch={false}
        >
          {path.charAt(0).toUpperCase() + path.slice(1)}
        </Link>
      </li>
    ))}
  </ul>
  );
}