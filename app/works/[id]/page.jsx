"use client";

import React, { useState, useEffect } from "react";
import WorksMain from "@/components/works-main-page/WorksMain";
import Loader from "@/components/loader/Loader"; // Ensure this path is correct
import { useParams } from "next/navigation";

const WorkDetailPage = () => {
  const { id } = useParams();
  const [gridItems, setGridItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(true); // State for minimum display time
  const BACKEND_WORKS_DETAIL_URI =
    process.env.NEXT_PUBLIC_BACKEND_WORKS_DETAIL_URI;

  useEffect(() => {
    let timeoutId;

    const fetchWorks = async () => {
      try {
        // Start the timeout for loader display
        timeoutId = setTimeout(() => {
          setShouldDisplayLoader(true);
        }, 1400); // Set minimum display time of 1.4 seconds

        const response = await fetch(`${BACKEND_WORKS_DETAIL_URI}/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const { data } = result;

        setGridItems(data);
      } catch (error) {

      } finally {
        setLoading(false); // Set loading to false when done
        // Clear the timeout if fetching completes before minimum display time
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        // Ensure loader is displayed for at least 1.4 seconds
        setShouldDisplayLoader(true);
      }
    };

    if (id) {
      fetchWorks();
    }

    return () => {
      // Cleanup timeout if component unmounts
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [id, BACKEND_WORKS_DETAIL_URI]); // Include BACKEND_WORKS_DETAIL_URI in the dependency array

  if (loading && shouldDisplayLoader) return <Loader />; // Display the loader while loading

  return (
    <>
      <WorksMain gridItems={gridItems} />
    </>
  );
};

export default WorkDetailPage;
