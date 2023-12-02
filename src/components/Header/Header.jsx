import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import Image from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="container header">
        <Link to="/">
          <img className="header__logo" src={Logo} />
        </Link>

        <div className="header__row">
          <input className="header__search" placeholder="Search" type="text" />
          <img className="header__avatar header__avatar--mobile" src={Image} />
        </div>

        <button onClick={() => navigate("/upload")} className="header__button">
          UPLOAD
        </button>

        <img className="header__avatar" src={Image} />
      </header>
    </>
  );
}

export default Header;
