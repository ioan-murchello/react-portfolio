import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import LeftBottomSidebar from "../components/LeftBottomSidebar";
import BigSidebar from "../components/MainSidebar";
import Aside from "../components/Aside";


const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setIsOpen(false));
    return () => {
      window.removeEventListener("resize", () => setIsOpen(false));
    };
  }, []);

  return (
    <main className="container h-screen w-full mx-auto flex">
      <Aside isOpen={isOpen}>
        <BigSidebar />
      </Aside>
      <section className="w-full rounded-lg pt-2 pb-16 sm:pb-2 sm:py-5 px-4 sm:px-8 overflow-y-auto scrollbar-hide">
        <Outlet />
      </section>
      <aside className="fixed bottom-0 z-[999] left-1/2 -translate-x-1/2 flex justify-center p-4 w-full max-w-[300px] lg:relative lg:translate-x-0 lg:left-0 lg:max-w-max lg:min-h-fit">
        <LeftBottomSidebar toggleOpen={isOpen} handleOpen={setIsOpen} />
      </aside>
    </main>
  );
};
export default Layout;
