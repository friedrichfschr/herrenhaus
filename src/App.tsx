import { Route, Routes } from "react-router-dom";

import AboutPage from "@/pages/about";
import EmpfehlungenPage from "./pages/empfehlungen";
import KontaktPage from "./pages/kontakt";
import DefaultLayout from "./layouts/default";
import SpektakulärPage from "./pages/spektakulär";
import RatPage from "./pages/rat";
import TippsPage from "./pages/tipps";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route element={<AboutPage />} path="/" />
        <Route element={<EmpfehlungenPage />} path="/empfehlungen" />
        <Route element={<KontaktPage />} path="/kontakt" />
        <Route element={<SpektakulärPage />} path="/spektakulär" />
        <Route element={<RatPage />} path="/rat" />
        <Route element={<TippsPage />} path="/tipps" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
