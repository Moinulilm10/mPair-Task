import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.jpg";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div style={{ background: "rgba(35, 151, 200, 1)" }}>
        <div className="px-10 navbar">
          <div className="flex-1">
            <Link to="/">
              <img src={logo} className="h-7"></img>
            </Link>
          </div>
          <div className="flex-none gap-2">
            <div>
              <h1 className="text-[#ffff] font-semibold">Aminul Islam</h1>
              <p className="text-[#ffff] font-normal">Account Manager</p>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={avatar} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
