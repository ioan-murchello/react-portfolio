import avatar from "../img/zolden.jpeg";
import { sidebarIcons, socialIcons } from "../datas/icons";
import List from "./List";

const MainSidebar = () => {
  return (
    <div className="flex top-0 left-0  flex-col gap-2 lg:gap-y-5 items-center py-5">
      <div className="h-24 w-24 lg:w-32 lg:h-32 flex mb-2 lg:mb-4 rounded-full overflow-hidden shadow-zinc-600 shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={avatar}
          alt="Author avatar"
        />
      </div>
      <h2 className="text-xl lg:text-2xl">Janos Murza</h2>
      <p className="text-md lg:text-xl bg-gray-300 p-2 rounded-lg">Front-End Developer</p>

      <List listToRender={socialIcons} type="social" modified={false} />
      <List listToRender={sidebarIcons} type="icons" modified={true} />
    </div>
  );
};
export default MainSidebar;
