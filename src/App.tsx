import { Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/default";
import FürdenBräutigamPage from "./pages/festlich/fürdenBräutigam";
import TrauzeugePage from "./pages/festlich/derTrauzeuge";
import TippsPage from "./pages/festlich/tipps";
import GästeFamiliePage from "./pages/festlich/GästeFamiliedesBrautpaares";

import AboutPage from "@/pages/about";
import { Datenschutz } from "./pages/datenschutz";
import { Impressum } from "./pages/impressum";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<AboutPage />} path="/" />
        <Route element={<FürdenBräutigamPage />} path="/bräutigam" />
        <Route element={<TrauzeugePage />} path="/trauzeuge" />
        <Route element={<GästeFamiliePage />} path="/familie" />
        <Route element={<TippsPage />} path="/tipps" />
        <Route element={<Datenschutz />} path="/datenschutz" />
        <Route element={<Impressum />} path="/impressum" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
