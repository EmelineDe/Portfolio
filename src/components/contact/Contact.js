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
                  <div className="loading-spinner mt-3 flex">
                    <svg
                      aria-hidden="true"
                      class="inline w-6 h-6 text-gray-200 animate-spin fill-[#42bcbc] dark:text-gray-600 dark:fill-[#ec704c] "
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
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
