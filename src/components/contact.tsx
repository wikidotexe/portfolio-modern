"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const [name, setName] = useState(""); // State untuk nama
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("pending");

    try {
      const response = await fetch("https://wikidotexe.xyz/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, senderEmail, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName(""); // Reset name
        setSenderEmail(""); // Reset email
        setMessage(""); // Reset message
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <motion.section id="contact" className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <SectionHeading>{"Contact Me"}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">{"Feel free to contact me directly through this form"}</p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="name"
          type="text"
          required
          maxLength={100}
          placeholder={"Your name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="h-14 px-4 mt-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder={"Your email"}
          value={senderEmail}
          onChange={(e) => setSenderEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder={"Send a message"}
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={status === "pending" ? "Sending..." : "Submit"} />
        {status === "success" && <p className="text-green-500 mt-2">Email sent successfully!</p>}
        {status === "error" && <p className="text-red-500 mt-2">Failed to send email. Please try again.</p>}
      </form>
    </motion.section>
  );
}
