import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { title } from "./primitives";
import { t } from "i18next";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { addToast } from "@heroui/toast";
import ReCAPTCHA from "react-google-recaptcha";
import i18n from "@/i18n";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [firma, setFirma] = useState("");
  const [message, setMessage] = useState("");
  const formref = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!recaptchaRef.current.getValue()) {
      addToast({
        title: "Error",
        description: t("kontakt.errorMessageRecaptcha"),
        color: "danger",
      });
      return;
    }
    const params = {
      email,
      name,
      firma,
      message,
      "g-recaptcha-response": recaptchaRef.current.getValue(),
    };

    try {
      emailjs
        .send("service_t8gf0mg", "template_qnkair8", params, {
          publicKey: "JUsM4xFcAYTAwAY7D",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            addToast({
              title: "Erfolg",
              description: "Ihre Nachricht wurde erfolgreich gesendet.",
              color: "success",
            });
            if (formref.current) {
              formref.current.reset();
              setEmail("");
              setName("");
              setFirma("");
              setMessage("");
              recaptchaRef.current.reset();
            }
          },
          (error) => {
            console.log("FAILED...", error, e.target);
            addToast({
              title: t("kontakt.errorTitle"),
              description: t("kontakt.errorDescription"),
              color: "danger",
            });
          }
        );
    } catch (error) {
      console.log("FAILED...", error);
      addToast({
        title: t("kontakt.errorTitle"),
        description: t("kontakt.errorDescription"),
        color: "danger",
      });
    }
  };

  const [language, setLanguage] = React.useState(i18n.language);

  React.useEffect(() => {
    i18n.on("languageChanged", (lan) => {
      setLanguage(lan);
    });
  }, [i18n]);

  return (
    <>
      {/* <h1 className={title()}>{t("routes.Öffnungszeiten")}</h1> */}
      <h1 className={title()}>{t("routes.Kontakt")}</h1>

      <div className="pt-1 pb-5">
        <p>
          <b>{t("kontakt.title1")}</b>
          <br />
          {t("kontakt.hour1v1")}
          <br />
          {t("kontakt.hour1v2")}
          <br />
          <br />
          <b>{t("kontakt.title2")}:</b>
          <br /> {t("kontakt.hour2")}
        </p>
      </div>
      <div className="flex flex-row grow gap-5 mt-5 justify-end  w-full text-lg pt-1">
        <div className="  grow">
          <iframe
            className="grow"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.871195028342!2d9.178608477638686!3d51.71709899536135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bafe9d6aaca34b%3A0x6cc700fd279a294e!2sHerrenhaus%20Fischer!5e0!3m2!1sen!2sde!4v1767107459772!5m2!1sen!2sde"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col  ">
          <div className="flex flex-col  text-left">
            <span> Herrenhaus Fischer </span>
            <span>Am Thy 15</span>
            <span>33034 Brakel</span>
          </div>
          <span>
            <br />
          </span>
          <Link size="lg" href="tel:05272 - 355 83">
            05272 - 355 832
          </Link>

          <Link size="lg" href="mailto:mode@herrenhaus-fischer.de">
            mode@herrenhaus-fischer.de
          </Link>
        </div>
      </div>
      <div className="w-full mt-10 ">
        <Form
          ref={formref}
          className="w-full flex flex-col gap-4 flex-wrap"
          onSubmit={sendEmail}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            errorMessage={t("kontakt.errorMessageEmail")}
            label={t("kontakt.label.email")}
            labelPlacement="outside"
            name="email"
            placeholder={t("kontakt.placeholder.email")}
            type="email"
          />
          <Input
            onChange={(e) => setName(e.target.value)}
            label={t("kontakt.label.name")}
            labelPlacement="outside"
            name="name"
            placeholder={t("kontakt.placeholder.name")}
            type="text"
          />

          <Input
            onChange={(e) => setFirma(e.target.value)}
            label={t("kontakt.label.firma")}
            labelPlacement="outside"
            name="Firma"
            placeholder={t("kontakt.placeholder.firma")}
            type="text"
          />
          <Textarea
            isRequired
            onChange={(e) => setMessage(e.target.value)}
            label={t("kontakt.label.nachricht")}
            labelPlacement="outside"
            classNames={{ label: "w-full text-left" }}
            name="message"
            placeholder={t("kontakt.placeholder.nachricht")}
            type="text"
          />
          <div className="flex gap-2" id="empfehlungenscroll">
            <Button color="primary" type="submit">
              {t("kontakt.sendButton")}
            </Button>
          </div>
        </Form>
      </div>
      {message ? (
        <ReCAPTCHA
          theme="light"
          ref={recaptchaRef}
          sitekey={"6LcGn_8rAAAAAM0d8BhfD9J9eUAcNNTYLMyZmxWS"}
        />
      ) : null}
    </>
  );
}
