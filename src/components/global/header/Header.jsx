import "./header.scss";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header>
      <div className="contained">
        <MdMenu className="menu-icon" />
      </div>
    </header>
  );
}

export default Header;
