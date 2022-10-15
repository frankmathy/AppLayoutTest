import "./Header.css";

const Header = (props) => {
  return (
    <div class="Header">
      <span>{props.message}</span>
    </div>
  );
};

export default Header;
