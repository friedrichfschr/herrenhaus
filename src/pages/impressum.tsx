import React from "react";
import { Card, CardBody } from "@heroui/card";

type Props = {};

export function Impressum(props: Props) {
  return (
    <section className="min-h-[calc(100vh-130px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Impressum</h1>

        <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          <CardBody className="gap-6 p-8">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-600">
                Herrenhaus Fischer
              </h2>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-medium">Adresse:</span> Am Thy 15, 33034
                  Brakel
                </p>
                <p>
                  <span className="font-medium">Telefon:</span> 05272 - 355 832
                </p>
                <p>
                  <span className="font-medium">E-Mail:</span>{" "}
                  <a
                    href="mailto:mode@herrenhaus-fischer.de"
                    className="text-blue-500 hover:underline"
                  >
                    mode@herrenhaus-fischer.de
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Inhaber
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Bernhard Fischer
              </p>
            </div>

            <div className="border-t border-gray-300 dark:border-gray-600 pt-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">
                Haftungshinweis
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
