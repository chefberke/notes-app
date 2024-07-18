import React from "react";
import Logo from "../logo";
import Buttondialog from "../buttondialog";
import Searchbar from "../searchbar";

function Topbar() {
  return (
    <div className="flex items-center justify-between mt-6 mx-12 max-sm:mx-2">
      <div className="h-[4rem] w-full bg-white rounded-xl flex items-center">
        <div className="flex items-center justify-between px-8 w-full max-sm:px-2">
          <div className="max-sm:w-[40px] max-sm:h-[40px]">
            <Logo />
          </div>
          <div>
            <Searchbar />
          </div>
          <div>
            <Buttondialog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
