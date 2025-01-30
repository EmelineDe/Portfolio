/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import Swal from "sweetalert2";

import emailjs from "@emailjs/browser";

import "./Contact.css";
import DOMPurify from "dompurify";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "3em",
  },
  form: {
    width: "100%",
  },
  formfield: {
    width: "100%",
    marginBottom: "2rem",
  },
}));

export const Contact = () => {
  const classes = useStyles();

  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const [isCooldown, setIsCooldown] = useState(false);
  const [name, setName] = useState("");

  const capitalizeName = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    e.persist();

    const formElements = form.current.elements;
    const formattedName = name.trim();
    setName(formattedName);
    const email = formElements.email.value.trim();
    const message = formElements.message.value.trim();
    const messagePattern = /^[a-zA-Z0-9À-ÿ\s.,!?'"()\-_:;]+$/;
    const blockedWords = ["http://", "https://", "spamword"];

    if (blockedWords.some((word) => message.includes(word))) {
      Swal.fire({
        icon: "error",
        title: "Votre message contient des éléments interdits.",
        showConfirmButton: true,
      });
      return;
    }
    if (!name || !email || !message) {
      Swal.fire({
        icon: "error",
        title: "Tous les champs sont obligatoires",
        showConfirmButton: true,
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Adresse email invalide",
        showConfirmButton: true,
      });
      return;
    }

    if (isCooldown) {
      Swal.fire({
        icon: "warning",
        title: "Veuillez attendre avant de soumettre à nouveau",
        showConfirmButton: true,
      });
      return;
    }

    if (message.length > 500) {
      Swal.fire({
        icon: "error",
        title: "Le message ne peut pas dépasser 500 caractères",
        showConfirmButton: true,
      });
      return;
    }

    if (!messagePattern.test(message)) {
      Swal.fire({
        icon: "error",
        title: "Le message contient des caractères non autorisés",
        showConfirmButton: true,
      });
      return;
    }

    let sanitizedMessage;
    try {
      sanitizedMessage = DOMPurify.sanitize(message);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erreur lors du traitement de votre message.",
        showConfirmButton: true,
      });
      return;
    }

    form.current.cleanMessage.value = sanitizedMessage;

    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 60000);
    setIsSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email envoyé avec succès !",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        setName("");
        setIsSending(false);
      })
      .catch((error) => {
        setIsSending(false);
        if (error.response && error.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Clés EmailJS incorrectes ou manquantes",
            showConfirmButton: true,
          });
        } else if (navigator.onLine === false) {
          Swal.fire({
            icon: "error",
            title: "Pas de connexion Internet",
            showConfirmButton: true,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Erreur inconnue. Veuillez réessayer.",
            showConfirmButton: true,
          });
        }
      });
  };

  return (
    <section id="contact">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
          <span className="w-fit text-black p-2 px-5 text-xl rounded-md dark:bg-transparent dark:text-white">
            <h1>Contact</h1>
          </span>
          <span className="w-24 h-[2px] bg-[#42bcbc] dark:bg-[#ec704c]"></span>
        </div>
      </div>
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              <TextField
                id="outlined-name-input"
                label="Nom"
                type="text"
                size="small"
                variant="filled"
                name="name"
                value={name}
                onChange={(e) => setName(capitalizeName(e.target.value))}
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                size="small"
                variant="filled"
                name="email"
                className={classes.formfield}
              />
              <TextField
                id="outlined-password-input"
                label="Message"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message"
                className={classes.formfield}
              />
              <input type="hidden" name="cleanMessage" value="" />
              <div className="flex">
                <button
                  type="submit"
                  value="Send"
                  className="submit-btn bg-[#42bcbc] hover:bg-[#ec704c] dark:bg-[#ec704c] dark:hover:bg-[#42bcbc]"
                >
                  <i className="fas fa-terminal"></i>
                  <Typography component="span"> Envoyer </Typography>
                </button>
                {isSending && (
                  <div className="loading-spinner mt-1">
                    <span className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full text-black dark:text-white"></span>
                    <span className="ml-2 text-black dark:text-white">
                      Envoi en cours...
                    </span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
