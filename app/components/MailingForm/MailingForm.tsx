import React, { useState } from "react";
import { SuccessMessage } from "../SuccessMessage/SuccessMessage";
import styles from "./MailingForm.module.css";

export const MailingForm = () => {
  const [successfullySubmitted, setSubmittedStatus] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (successfullySubmitted) setSubmittedStatus(false);
    setEmailValue(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (!emailValue) return;
    setSubmittedStatus(true);
  };

  return (
    <section className={styles.form__container}>
      <p className={styles.form__paragraph}>
        Please enter your email address to receive course titles, the topics
        will be emailed to you.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          className={styles.form__input}
          minLength={4}
        />
      </form>
      {successfullySubmitted ? <SuccessMessage /> : null}
    </section>
  );
};
