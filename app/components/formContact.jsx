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
        className={`flex 
          flex-col 
          gap-4 
          bg-[#E8DDC7] 
          p-4 
          rounded-xl 
          border 
          border-[#CBBDA5] 
          flex flex-col gap-5
          w-full max-w-[720px]
          mx-auto
          bg-[#E8DDC7]
          border border-[#CBBDA5]
          p-5 md:p-8
          rounded-2xl
          shadow-sm ${isFormVisible ? "block" : "hidden"}`}
      >
        <h4 className="text-2xl font-bold">Contactez nous ici !</h4>
        <p> Une question ? un événement à organiser ? vous souhaitez recevoir un devis ? contactez-nous !</p>
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            name="name"
            type="text"
            placeholder="Nom"
            className="p-2 border border-[#CBBDA5] rounded bg-[#FFFCF6] w-full md:w-1/2 rounded-xl"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-2 border border-[#CBBDA5] rounded bg-[#FFFCF6] w-full md:w-1/2 rounded-xl"
          />
        </div>
        <input
          name="subject"
          type="text"
          placeholder="Sujet"
          className="p-2 border border-[#CBBDA5] rounded bg-[#FFFCF6] rounded-xl"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 border border-[#CBBDA5] rounded bg-[#FFFCF6] rounded-xl"
        />
        <Button className={`mt-4 bg-[#A54D35] text-white p-2 rounded hover:bg-[#8C3A25] ${isFormVisible ? "block" : "hidden"}`}>
          Envoyer
        </Button>
      </form>
    </>
  );
}
