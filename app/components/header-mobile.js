"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";
import styles from "./header-mobile.module.css";
import { usePathname } from "next/navigation";
import { HeaderMobileMenu } from "./header-mobile-menu";
import useLockBodyScroll from "./ui/use-lock-body-scroll";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export function HeaderMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useLockBodyScroll(isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" prefetch={false}>
          The Future of Work Council
        </Link>
      </div>

      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={styles.menu}
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuBtn}
        >
          Menu
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <HeaderMobileMenu 
          isOpen={isOpen} 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </motion.nav>
    </header>
  );
}
