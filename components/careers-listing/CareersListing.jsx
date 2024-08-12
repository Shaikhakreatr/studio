"use client"
import React from "react";
import { useState, useEffect } from "react";
import CareersOpening from "./CareersOpening/CareersOpening";
import CareersEmpty from "./CareersEmpty/CareersEmpty";
import Loader from "../loader/Loader";

const CareersListing = () => {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch(
          "https://pcfja54uwi.execute-api.ap-south-1.amazonaws.com/dev/career"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCareerData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  const hasCareerData = careerData && careerData.length > 0;

  return (
    <div>
      {hasCareerData ? (
        <CareersOpening careerData={careerData} />
      ) : (
        <CareersEmpty />
      )}
    </div>
  );
};

export default CareersListing;
