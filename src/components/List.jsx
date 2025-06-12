const List = ({ listToRender, type, modified }) => {
  let ulStyles = "";
  let liStyles = "";
  let iconClass = "";

  switch (type) {
    case "social":
      ulStyles = "flex gap-4 mt-3 flex-wrap";
      iconClass = "h-6 w-6 lg:h-8 lg:w-8 hover:scale-105 transition-transform";
      break;

    case "icons":
      ulStyles =
        "flex w-full gap-y-2 flex-col items-center lg:items-start mt-3";
      liStyles = "flex gap-x-2 gap-y-2 items-center rounded-lg group";
      iconClass =
        "h-6 w-6 lg:h-8 lg:w-8 transform transition-transform duration-300 group-hover:rotate-12";
      break;
    case "smallSidebar":
      ulStyles =
        "max-h-max gap-4 flex flex-wrap sm:flex-nowrap backdrop-blur-lg bg-white/10 lg:bg-gray-100 items-center p-4 rounded-lg lg:w-full lg:flex-col lg:glass-effect";
      liStyles = "rounded-lg flex justify-center items-center";
      iconClass = "h-6 w-6 sm:h-10 sm:w-10 text-gray-700 md:hover:scale-105";
      break;

    default:
      ulStyles = "flex gap-4 mt-3 flex-wrap";
      iconClass = "h-8 w-8";
  }

  return (
    <ul className={ulStyles}>
      {listToRender?.map((icon) => {
        return !modified ? (
          <li className={liStyles} key={icon.id}>
            <a
              href={icon.availability}
              target="_blank"
              rel="noopener noreferrer"
            >
              <icon.icon className={`${iconClass} ${icon.color}`} />
            </a>
          </li>
        ) : (
          <li key={icon.id} className={liStyles}>
            <icon.icon className={`${iconClass} ${icon.color}`} />
            <a href={icon.availability}>{icon.title}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
