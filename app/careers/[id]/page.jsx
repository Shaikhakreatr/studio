"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CareersMain from "@/components/CareersMainPage/CareersMain";
import Loader from "@/components/loader/Loader"; // Ensure this path is correct

const CareersListing = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [shouldDisplayLoader, setShouldDisplayLoader] = useState(true); // State for minimum display time

  const BACKEND_CAREER_URI = process.env.NEXT_PUBLIC_BACKEND_CAREER_URI;

  useEffect(() => {
    let timeoutId;

    const fetchCareerData = async () => {
      try {
        // Start the timeout for loader display
        timeoutId = setTimeout(() => {
          setShouldDisplayLoader(true);
        }, 1400); // Set minimum display time of 1.4 seconds

        const response = await fetch(`${BACKEND_CAREER_URI}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const careerData = data.find((career) => career.id === id);
        if (careerData) {
          setCareerData(careerData);

        } else {
          setError(new Error("Career not found"));
        }
      } catch (error) {

        setError(error);
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
      fetchCareerData();
    }

    return () => {
      // Cleanup timeout if component unmounts
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [id, BACKEND_CAREER_URI]);

  if (loading && shouldDisplayLoader) return <Loader />; // Display the loader while loading

  return (
    <>
      <div className="container mx-auto">
        <CareersMain careerData={careerData} />
      </div>
    </>
  );
};

export default CareersListing;
