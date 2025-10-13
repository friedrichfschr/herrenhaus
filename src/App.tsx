import { Route, Routes } from "react-router-dom";

import TerminePage from "@/pages/termine";
import AboutPage from "@/pages/about";
import EmpfehlungenPage from "./pages/empfehlungen";
import KontaktPage from "./pages/kontakt";

function App() {
  return (
    <Routes>
      <Route element={<AboutPage />} path="/" />
      <Route element={<EmpfehlungenPage />} path="/empfehlungen" />
      <Route element={<KontaktPage />} path="/kontakt" />
      <Route element={<TerminePage />} path="/termine" />
    </Routes>
  );
}

export default App;
