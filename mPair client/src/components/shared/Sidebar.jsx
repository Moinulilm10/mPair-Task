import { FaEdit } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="h-full w-[350px]"
      style={{ background: "rgba(228, 242, 248, 1)" }}
    >
      <h3
        className="px-6 my-5 text-lg font-semibold"
        style={{ color: "rgba(35, 151, 200, 1)" }}
      >
        Accounting
      </h3>
      <ul className="pl-6">
        <li>
          <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-0 hover:border-s-8">
            <GoHome />
            <Link to="/dashboard" className="w-full">
              Dashboard
            </Link>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-0 hover:border-s-8">
            <IoVideocamOutline />
            <Link to="/accounting">Accounting</Link>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-0 hover:border-s-8">
            <FaEdit />
            <Link to="/report">Reports</Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
