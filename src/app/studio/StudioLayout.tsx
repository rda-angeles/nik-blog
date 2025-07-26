import React from "react";
import SanityHeader from "../components/SanityHeader";

const StudioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SanityHeader />
      {children}
    </div>
  );
};

export default StudioLayout;
