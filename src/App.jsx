import "./App.scss";

import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          {/* <Route path="/upload"  element={<Upload/>} /> */}
          {/* <Route path="/video/:id"  element={<MainVideoPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
