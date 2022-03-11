import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { View } from "./pages/View";

export default function RoutesApp() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
    </BrowserRouter>
  );
}
