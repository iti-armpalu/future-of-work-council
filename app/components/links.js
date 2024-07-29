"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./links.module.css";
import { useEffect, useState } from "react";

export function Links() {
  const pathname = usePathname();

  const [visibleItems, setVisibleItems] = useState(Array(5).fill(false));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(Array(5).fill(true));
    }, 100); // 100ms delay before starting the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    // <nav className={styles.navigation}>
    //   <ul>
    //     <li>
    //       <Link
    //         className={`${pathname === "/about" ? `${styles.active}` : ""}`}
    //         href="/about"
    //         prefetch={false}
    //       >
    //         About the Council
    //       </Link>
    //     </li>
    //     <li>
    //       <Link 
    //         className={`${pathname === "/activities" ? `${styles.active}` : ""}`} 
    //         href="/activities"
    //         prefetch={false}
    //       >
    //         Council Activities
    //       </Link>
    //     </li>
    //     <li>
    //       <Link 
    //         className={`${pathname === "/partners" ? `${styles.active}` : ""}`} 
    //         href="/partners"
    //         prefetch={false}
    //       >
    //         Partners
    //       </Link>
    //     </li>
    //     <li>
    //       <Link 
    //         className={`${pathname === "/reports" ? `${styles.active}` : ""}`} 
    //         href="/reports"
    //         prefetch={false}
    //       >
    //         Reports & Insights
    //       </Link>
    //     </li>
    //     <li>
    //       <Link 
    //         className={`${pathname === "/contact" ? `${styles.active}` : ""}`} 
    //         href="/contact"
    //         prefetch={false}
    //       >
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav className={styles.navigation}>
      <ul>
        {["about", "activities", "partners", "reports", "contact"].map((path, index) => (
          <li key={path} className={visibleItems[index] ? styles.visible : ""}>
            <Link
              className={pathname === `/${path}` ? styles.active : ""}
              href={`/${path}`}
              prefetch={false}
            >
              {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
