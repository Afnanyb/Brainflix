import "./App.scss";
import Logo from "./assets/Logo/BrainFlix-logo.svg";
import Icon from "./assets/Icons/upload.svg";

function App() {
  return (
    <>
      <img src={Logo} className="logo__img" />
      <input type="text" placeholder="search" />
      <img src={Images} className="avatar__img" />
      <button src={Icon} className="upload__btn" />
    </>
  );
}

export default App;
