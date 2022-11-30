import React from "react";
import { Container } from "../../components/Container/Container";
import { MailingContent } from "../../components/MailingContent/MailingContent";
import { MailingImage } from "../../components/MailingImage/MailingImage";
import styles from "./Mailing.module.css";

export const Mailing = () => {
  return (
    <Container black={true}>
      <section className={styles.flexContainer}>
        <MailingContent />
        <MailingImage />
      </section>
    </Container>
  );
};
