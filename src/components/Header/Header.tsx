import "./Header.scss";
import bellIcon from "../../assets/bell.svg";
import questionIcon from "../../assets/question.svg";
import themeIcon from "../../assets/theme.svg";
import avatar from "../../assets/avatar.svg";
import { NavLink } from "react-router-dom";
import { useGeolocate } from "../../hook/useGeolocate";

const Header = () => {
  const geolocate = useGeolocate();
  return (
    <header className="header">
      <h1 className="header__title">Портал Разработчика</h1>
      <nav className="header__nav">
        <NavLink to="/" className="header__nav-link">
          Моё обучение
        </NavLink>
        <NavLink to="/tasks" className="header__nav-link">
          Задачи
        </NavLink>
        <NavLink to="/search" className="header__nav-link">
          Поиск
        </NavLink>
      </nav>
      <div className="header__menu">
        {geolocate && <span className="header__city">г. {geolocate}</span>}
        <img className="header__menu-item" src={bellIcon} alt="bell" />
        <img className="header__menu-item" src={questionIcon} alt="faq" />
        <img className="header__menu-item" src={themeIcon} alt="theme icon" />
      </div>
      <div className="header__auth">
        <img className="header__auth-logo" src={avatar} alt="user image" />
        <span className="header__auth-name">Михаил Романов</span>
      </div>
    </header>
  );
};

export default Header;
