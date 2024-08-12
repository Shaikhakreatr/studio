"use client";

import React, { useState, useEffect } from "react";
import WorksPageList from "@/components/works-page-list/WorksPageList";
import Loader from "@/components/loader/Loader";

const WorkListingPage = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(true); // State for minimum display time

  useEffect(() => {
    let timeoutId;

    // Function to simulate loading time
    const simulateLoading = () => {
      timeoutId = setTimeout(() => {
        setShouldDisplayLoader(true);
      }, 1400); // Set minimum display time of 1.4 seconds

      setLoading(false); // Set loading to false once timeout completes
    };

    simulateLoading();

    return () => {
      // Cleanup timeout if component unmounts
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (loading && shouldDisplayLoader) return <Loader />; // Display the loader while loading

  return (
    <div className="container mx-auto">
      <WorksPageList />
    </div>
  );
};

export default WorkListingPage;
