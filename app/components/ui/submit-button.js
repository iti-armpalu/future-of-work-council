"use client";

import { useFormStatus } from "react-dom";
import styles from "./submit-button.module.css";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`${styles.btn} ${styles.primary} ${pending ? styles.disabled : ""}`}
    >
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
