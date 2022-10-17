import "./style.css";

const Header = ({title}) => (
    <header className="form__header">
    <h1 className="form__header--tittle"> {title}</h1>
  </header>
);

export default Header;