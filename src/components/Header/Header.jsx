import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/upload.svg";
import Image from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <>
      <header className="container header">
        <img className="header__logo" src={Logo} />

        <div className="header__row">
          <input className="header__search" placeholder="Search" type="text" />
          <img className="header__avatar header__avatar--mobile" src={Image} />
        </div>

        <button className="header__button">
          <img src={Icon} />
          Upload
        </button>

        <img className="header__avatar" src={Image} />
      </header>
    </>
  );
}

export default Header;
