import { Link, useLocation } from "react-router-dom";
import { iconsForSmallSidebar } from "../datas/icons"; 

import { RiMenuAddLine } from "react-icons/ri";

const LeftBottomSidebar = ({ handleOpen, toggleOpen }) => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <ul className="max-h-max gap-4 flex flex-wrap sm:flex-nowrap backdrop-blur-lg bg-white/10 lg:bg-gray-100 items-center p-4 rounded-lg lg:w-full lg:flex-col lg:glass-effect">
      {iconsForSmallSidebar?.map((icon) => {
        return (
          <li key={icon.id} onClick={() => handleOpen(false)}>
            <Link
              className="rounded-lg flex justify-center items-center"
              to={icon.path}
            >
              <icon.icon
                className={`h-8 w-8 sm:h-10 sm:w-10 ${
                  active === icon.path
                    ? icon.color
                    : "text-gray-700 md:hover:scale-105"
                } `}
              />
            </Link>
          </li>
        );
      })}
      <li className="block lg:hidden" key={999}>
        <button
          className="flex justify-center items-center "
          onClick={() => handleOpen((prev) => !prev)}
        >
          <RiMenuAddLine
            className={`h-8 w-8 ${
              toggleOpen ? "text-orange-500" : "text-teal-900"
            }`}
          />
        </button>
      </li>
    </ul>
  );
};
export default LeftBottomSidebar;
