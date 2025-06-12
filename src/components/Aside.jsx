const Aside = ({ isOpen, children }) => {
  return (
    <aside
      className={`
    fixed  min-w-fit inset-y-0 left-0 z-10
    bg-white transition-all duration-500 ease-in-out
    flex flex-col justify-start items-center
    overflow-y-auto p-4 w-full h-svh

    ${isOpen ? "translate-x-0" : "w-0 -translate-x-full"}

    lg:static lg:w-auto lg:h-auto lg:translate-x-0 lg:p-6 lg:flex lg:bg-white  
  `}
    >
      {children}
    </aside>
  );
};
export default Aside;
