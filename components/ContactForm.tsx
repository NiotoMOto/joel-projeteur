import React, { useState } from "react";
import { Button } from "./Button";

import styles from "./contactForm.module.scss";

const encode = (data: {
  name: string;
  email: string;
  message: string;
  phone: string;
  "form-name": string;
}) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key] as string)
    )
    .join("&");
};

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...{ name, phone, message, email },
      }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <p>
        <label>
          Ton nom:{" "}
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Ton Email:{" "}
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Ton Téléphone:{" "}
          <input
            className={styles.input}
            type="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </p>
      <p>
        <Button type="submit">Envoyer</Button>
      </p>
    </form>
  );
};
