"use client";

import styles from "./contact-form.module.css";
import submitForm from "../actions";
import { useFormState } from "react-dom";
import { SubmitButton } from "./ui/submit-button";
import { useEffect, useRef, useState } from "react";


export function ContactForm() {
  // const [state, formAction] = useActionState(submitForm, initialState);
  const [formState, formAction] = useFormState(submitForm, "");
  const formRef = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");


  // useEffect hook monitors the formState for changes. If the form submission is successful, it resets the form fields and sets the success message. The message is cleared after 10 seconds using a timer.
  useEffect(() => {
    if (formState?.success) {
      // Clear form fields
      if (formRef.current) {
        formRef.current.reset();
      }
      // Display success message
      setSubmitMessage(formState.message);
      // Clear message after 5 seconds
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000);

      // Cleanup timer
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form ref={formRef} action={formAction} className={styles.form}>
      <p>Hello, the Future of Work Council</p>

      <p>
        My name is:
        <small>Name must be between 2 and 40 characters long.</small>
        <input
          placeholder="John Doe"
          type="text"
          id="name"
          name="name"
          required
        />
        {formState.errors?.name && <span>{formState.errors.name}</span>}
      </p>

      <p>
        My email is:
        <small>Email must be a valid email address.</small>
        <input
          placeholder="john.doe@example.com"
          type="email"
          id="email"
          name="email"
        />
        {formState.errors?.email && <span>{formState.errors.email}</span>}
      </p>

      <p>
        I would like to reach out to you about:
        <small>Subject must be between 5 and 100 characters long.</small>
        <input
          placeholder="Partnership opportunity"
          type="text"
          id="subject"
          name="subject"
        />
        {formState.errors?.subject && <span>{formState.errors.subject}</span>}
      </p>

      <p>
        Here are some more details:
        <small>Message must be between 5 and 500 characters long.</small>
        <input
          placeholder="Something something"
          type="text"
          id="message"
          name="message"
        />
        {formState.errors?.message && <span>{formState.errors.message}</span>}
      </p>
      <div className={styles.submitSection}>
        <SubmitButton />
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </form>
  );
}
