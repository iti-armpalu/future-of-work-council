"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./header-mobile-menu.module.css";
import { usePathname } from "next/navigation";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function HeaderMobileMenu(props) {

  const pathname = usePathname();

  const { isOpen, onClick } = props;

  return (
    <motion.ul
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={styles.list}
      variants={{
        open: {
          clipPath: "inset(0% 0% 0% 0% round 0)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.05,
          },
        },
        closed: {
          clipPath: "inset(10% 50% 90% 50% round 0)",
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
          },
        },
      }}
      style={{
        pointerEvents: isOpen ? "auto" : "none"
      }}
    >
      <motion.li variants={itemVariants}>
        <Link
          className={`${pathname === "/about" ? `${styles.active}` : ""}`}
          href="/about"
          prefetch={false}
          onClick={onClick}
        >
          About the Council
        </Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link
          className={`${pathname === "/activities" ? `${styles.active}` : ""}`}
          href="/activities"
          prefetch={false}
          onClick={onClick}
        >
          Council Activities
        </Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link
          className={`${pathname === "/partners" ? `${styles.active}` : ""}`}
          href="/partners"
          prefetch={false}
          onClick={onClick}
        >
          Partners
        </Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link
          className={`${pathname === "/reports" ? `${styles.active}` : ""}`}
          href="/reports"
          prefetch={false}
          onClick={onClick}
        >
          Reports & Insights
        </Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link
          className={`${pathname === "/contact" ? `${styles.active}` : ""}`}
          href="/contact"
          prefetch={false}
          onClick={onClick}
        >
          Contact
        </Link>
      </motion.li>
    </motion.ul>
  );
}
