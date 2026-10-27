"use client";

import { useState } from "react";
import Button from "./Button";

export default function FormContact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    console.log(name, email, subject, message);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
  }
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible
          ? "Fermer le formulaire"
          : "Vous voulez créer un événement ?"}
      </Button>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-4 mt-10 ${isFormVisible ? "block" : "hidden"}`}
      >
        <input
          name="name"
          type="text"
          placeholder="Nom"
          className="p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          name="subject"
          type="text"
          placeholder="Sujet"
          className="p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 border rounded"
        />
        <Button className={`mt-4 ${isFormVisible ? "block" : "hidden"}`}>
          Envoyer
        </Button>
      </form>
    </>
  );
}
