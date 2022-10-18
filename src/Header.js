import "./Header.css";

const Header = (props) => {
  return (
    <div className="Header">
      <span>{props.message}</span>
    </div>
  );
};

export default Header;
