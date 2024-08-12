"use client"

import { useState, useEffect } from "react";
import HomePage from "@/components/homePage/page";
import HomeLoader from "@/components/HomeLoader/HomeLoader";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }, 2000); // 2 seconds

    // Cleanup the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <HomeLoader /> : <HomePage />}
    </>
  );
}
