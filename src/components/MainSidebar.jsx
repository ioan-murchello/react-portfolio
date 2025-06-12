import avatar from "../img/cat.jpg";
import { sidebarIcons, socialIcons } from "../datas/icons";
import List from "./List";

const MainSidebar = () => {
  return (
    <div className="flex top-0 left-0  flex-col gap-y-5 items-center py-5">
      <div className="w-32 h-32 flex mb-4 rounded-full overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={avatar}
          alt="Author avatar"
        />
      </div>
      <h2 className="text-2xl mb-3">Murza Janos</h2>
      <p className="text-1xl bg-gray-300 p-2 rounded-lg">Front-End Developer</p>

      <List listToRender={socialIcons} type="social" modified={false} />
      <List listToRender={sidebarIcons} type="icons" modified={true} />
    </div>
  );
};
export default MainSidebar;
