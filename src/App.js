import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Voice from "./components/voice/voice";
import Fertilizer from "./components/fertilizer/fertilizer";
import Crop from "./components/crop/crop";
import SmsService from "./components/sms/sms";
import Disease from "./components/disease/disease";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/sms" element={<SmsService />} />
          <Route path="/disease" element={<Disease />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
