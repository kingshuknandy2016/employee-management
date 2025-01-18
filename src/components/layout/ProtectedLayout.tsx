import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Leftbar from "./Leftbar";
import { useState } from "react";

const ProtectedLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-none">
        <Topbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      </div>

      <div className="flex flex-row flex-1 overflow-hidden">
        <Leftbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <main className="flex-1 p-4 overflow-y-auto scrollbar-hide">
          <Outlet />
        </main>
      </div>
      {/* <div className="fixed left-0 right-0 bottom-0 w-full z-10 bg-white">
        <Footer />
      </div> */}
    </div>
  );
};

export default ProtectedLayout;
