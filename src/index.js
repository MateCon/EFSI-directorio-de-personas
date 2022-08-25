import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./Layout"
import Estadisticas from "./pages/Estadisticas";
import Home from "./pages/Home"
import Persona from "./pages/Persona";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="persona/:id" element={<Persona />} />
        <Route path="estadisticas" element={<Estadisticas />} />
      </Route>
    </Routes>
  </BrowserRouter>
);