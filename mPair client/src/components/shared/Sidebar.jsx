import { FaEdit } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";

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
            <a to="/dashboard" className="w-full">
              Dashboard
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-0 hover:border-s-8">
            <IoVideocamOutline />
            <a to="/accounting">Accounting</a>
          </div>
        </li>

        <li>
          <div className="flex items-center gap-2 p-3 cursor-pointer hover:bg-blue-200 hover:text-sky-500 hover:border-sky-500 hover:border-0 hover:border-s-8">
            <FaEdit />
            <a to="/reports">Reports</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
