import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/:videoId?" element={<MainVideoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
