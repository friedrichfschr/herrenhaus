import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import React from "react";

type Props = {};

export function Datenschutz(props: Props) {
  return (
    <section className="min-h-[calc(100vh-130px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Datenschutz</h1>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
              Datenschutzerklärung
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              sammeln keinerlei personenbezogene Daten auf unserer Website. Bei
              weiteren Fragen zum Datenschutz bitte wenden sie sich an uns.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400">
              Kontaktformular
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Wenn sie uns per Kontaktformular Anfragen zukommen lassen, werden
              ihre Angaben aus dem Anfrageformular inklusive der von ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne ihre Einwilligung weiter.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Das Kontaktformular wird durch EmailJS implementiert. Weitere
              Informationen zu EmailJS erhalten Sie hier:{" "}
              <Link
                href="https://www.emailjs.com/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
              >
                https://www.emailjs.com/legal/privacy-policy/
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
