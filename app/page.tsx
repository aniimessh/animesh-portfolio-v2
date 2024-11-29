import React from "react";

import RightContent from "@/components/rightContent";
import LeftContent from "@/components/leftContent";

const Home = () => {
  return (
    <div className="h-full ">
      <div className="w-full h-full border border-white/10 rounded-md flex md:flex-row flex-col">
        <div className="md:w-1/2 w-full p-4 md:border-r border-b border-white/10">
          <LeftContent />
        </div>
        <div className="md:w-1/2 w-full overflow-scroll p-4">
          <RightContent />
        </div>
      </div>
    </div>
  );
};

export default Home;
