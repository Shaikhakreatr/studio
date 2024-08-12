import React, { useEffect } from "react";
import Image from "next/image";
import { GridLoader } from "react-spinners";

const Loader = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the loader is rendered
  }, []);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <GridLoader color="#373737" />
    </div>
  );
};

export default Loader;
