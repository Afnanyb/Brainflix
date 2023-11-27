import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/upload.svg";
import Image from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Website logo" className="header__logo--img" />
        </div>
        <form className="header__search">
          <input
            type="search"
            placeholder="Search"
            className="header__search--box"
          ></input>
          <img src={Image} alt="Avatar" className="header__avatar" />
        </form>
        <div className="header__upload">
          <button className="header__button button">
            <img src={Icon} />
            UPLOAD
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
