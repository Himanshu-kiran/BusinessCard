import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./components/AddCard";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;