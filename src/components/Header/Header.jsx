import "./Header.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Icon from "../../assets/Icons/upload.svg";
import Image from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <>
      <header className="header__container">
        <img src={Logo} className="header__logo" />
        <div className="header__search-container">
          <div className="header__search-box">
            <input
              type="text"
              placeholder="search"
              className="header__search-bar"
            />
          </div>
          <div>
            <img src={Image} className="header__avatar" />
          </div>
          <button className="header__upload-button">
            <img src={Icon} />
            <span className="button-title"> UPLOAD</span>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
