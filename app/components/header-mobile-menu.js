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
  const { isOpen, onClick } = props;

  const pathname = usePathname();

  const links = ["about", "activities", "partners", "reports", "contact"];

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
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {links.map((path, index) => (
        <motion.li key={path} variants={itemVariants}>
          <Link
            className={pathname === `/${path}` ? styles.active : ""}
            href={`/${path}`}
            prefetch={false}
            onClick={onClick}
          >
            {path.charAt(0).toUpperCase() + path.slice(1).replace("-", " ")}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
