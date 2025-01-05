import React from "react";
import { Outlet } from "react-router";

export const CenteredLayout = () => {
  return (    
      <main className="flex flex-col justify-center items-center min-h-[100vh]">
        <Outlet />
      </main>
  );
};

export default CenteredLayout;
