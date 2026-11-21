import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import React from "react";

type Props = {};

export function Datenschutz(props: Props) {
  return (
    <section className="min-h-[calc(100vh-400px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-8">
        <h1 className="text-4xl font-bold text-center mb-8">Datenschutz</h1>

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-blue-600">Datenschutzerklärung</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Herrenhaus Fischer
              <br /> Am Thy 15, 33034 Brakel
              <br /> E-Mail: <Link href="mailto:mode@herrenhaus-fischer.de">mode@herrenhaus-fischer.de</Link>
            </p>

            <h3 className="text-lg font-semibold mt-4">Kurzüberblick</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Wir verwenden keine Web‑Analytics‑Tools und setzen keine eigenen
              Tracking‑Cookies. Drittanbieter können jedoch im Rahmen ihrer
              Dienste Cookies setzen oder Daten an Dritte übermitteln (z. B.
              Google reCAPTCHA, EmailJS). Die Spracheinstellung wird in
              `localStorage` gespeichert.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-yellow-600">Hosting</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Die Website wird beim Provider Netcup (netcup GmbH) gehostet. Für
              das Hosting besteht eine schriftliche Vereinbarung zur
              Auftragsverarbeitung (AVV / DPA) mit Netcup (Kundennummer:
              342943). Die Vereinbarung wurde unterzeichnet (Datum im
              Vertrag: 17.08.2026) und beinhaltet technische und
              organisatorische Maßnahmen sowie Anhänge zu TOMs, Subunternehmern
              und Verarbeitungsdetails. Netcup weist ferner auf bestehende
              Zertifizierungen (z. B. ISO 27001, ISO 27701) hin, die im AVV
              dokumentiert sind.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-green-600">Kontaktformular</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Das Kontaktformular verwendet EmailJS zur Übermittlung Ihrer
              Nachricht. Dabei werden die von Ihnen eingegebenen Daten an
              EmailJS übermittelt und anschließend an uns weitergeleitet. Die
              Datenschutzerklärung von EmailJS finden Sie hier:
            </p>
            <p>
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

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-red-600">Google reCAPTCHA</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Zur Abwehr von Spam und Missbrauch setzen wir Google reCAPTCHA ein.
              Dabei werden Nutzerdaten an Google übertragen; Google kann Cookies
              setzen und weitere Daten verarbeiten. Details finden Sie in der
              Datenschutzerklärung von Google:
            </p>
            <p>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
              >
                https://policies.google.com/privacy
              </Link>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              Rechtliche Grundlage kann berechtigtes Interesse (Art. 6 Abs. 1
              lit. f DSGVO) sein. Auf Wunsch können wir reCAPTCHA auch erst
              nach ausdrücklicher Einwilligung laden (Consent‑Lösung).
            </p>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-blue-600">Cookies & Speicherung</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Wir setzen keine eigenen Tracking‑Cookies ein. Folgendes kann
              jedoch auftreten:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>
                <strong>reCAPTCHA:</strong> Cookies und Datenübertragungen an
                Google können stattfinden (Sicherheits- und Anti‑Spam‑Zwecke).
              </li>
              <li>
                <strong>i18next:</strong> Die Spracheinstellung wird in
                `localStorage` gespeichert (keine Cookies), sofern so konfiguriert.
              </li>
              <li>
                <strong>Kontaktformular:</strong> Übermittlung an EmailJS zur
                Auslieferung der Nachricht.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              Zur abschließenden Dokumentation bitte ich Sie, die Live‑Website in
              den Entwicklertools zu prüfen (Application → Storage → Cookies),
              damit wir die tatsächlich gesetzten Cookies vollständig
              auflisten können. Soll ich das für die Live‑URL übernehmen?
            </p>
          </CardBody>
        </Card>

        <Card className="bg-white dark:bg-gray-900">
          <CardBody className="gap-4 p-8">
            <h2 className="text-2xl font-semibold text-indigo-600">Rechte der Betroffenen</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie den
              Widerruf einer Einwilligung. Zur Ausübung Ihrer Rechte kontaktieren
              Sie uns bitte unter der oben genannten E‑Mail‑Adresse.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Bei Beschwerden können Sie sich an die zuständige
              Aufsichtsbehörde wenden.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
