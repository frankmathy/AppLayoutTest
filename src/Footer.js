import "./Footer.css";

const Footer = (props) => {
  return (
    <div className="Footer">
      <span>{props.message}</span>
    </div>
  );
};

export default Footer;
