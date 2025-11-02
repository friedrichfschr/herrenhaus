import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { title } from "./primitives";
import { t } from "i18next";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { addToast } from "@heroui/toast";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
  const formref = useRef<HTMLFormElement | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (!recaptchaRef.current.getValue()) {
      addToast({
        title: "Error",
        description: "Bitte bestätigen Sie erst, dass Sie kein Roboter sind.",
        color: "danger",
      });
      return;
    }
    try {
      emailjs
        .sendForm(
          "service_t8gf0mg",
          "template_qnkair8",

          {
            ...(formref.current as any),
            "g-recaptcha-response": recaptchaRef.current.getValue(),
          },
          {
            publicKey: "JUsM4xFcAYTAwAY7D",
          }
        )
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
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
            addToast({
              title: "Error",
              description: error.text,
              color: "danger",
            });
          }
        );
    } catch (error) {
      console.log("FAILED...", error);
      addToast({
        title: "Error",
        description: String(error) || "Etwas ist schief gelaufen.",
        color: "danger",
      });
    }
  };

  return (
    <>
      <h1 className={title()}>{t("routes.Kontakt")}</h1>
      <div className="flex flex-row gap-5 mt-5 justify-end  w-full text-lg">
        <div className="flex flex-col  items-right text-right ">
          <span>
            <br />
          </span>
          <span>
            <br />
          </span>
          <span>
            <br />
          </span>
          <span>
            <br />
          </span>
          <span>Tel:</span>
          <span>Email:</span>
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
            isRequired
            errorMessage="Bitte geben sie eine korrekte Email Addresse ein."
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Enter your email"
            type="email"
          />
          <Input
            label="Name"
            labelPlacement="outside"
            name="name"
            placeholder="Enter your username"
            type="text"
          />

          <Input
            label="Firma"
            labelPlacement="outside"
            name="Firma"
            placeholder="Firma"
            type="text"
          />
          <Textarea
            label="Nachricht"
            labelPlacement="outside"
            classNames={{ label: "w-full text-left" }}
            name="message"
            placeholder="Nachricht"
            type="text"
          />
          <div className="flex gap-2">
            <Button color="primary" type="submit">
              Absenden
            </Button>
          </div>
        </Form>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={"6LcGn_8rAAAAAM0d8BhfD9J9eUAcNNTYLMyZmxWS"}
      />
    </>
  );
}
