import React from "react";
import { MailingForm } from "../MailingForm/MailingForm";
import { MailingHeader } from "../MailingHeader/MailingHeader";
import styles from "./MailingContent.module.css";

export const MailingContent = () => {
  return (
    <section className={styles.mailing__container}>
      <MailingHeader />
      <MailingForm />
    </section>
  );
};
