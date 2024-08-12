"use client"

import { useState, useEffect } from "react";
import BlogsPageList from "@/components/BlogsPageList/BlogsPageList";
import Loader from "@/components/loader/Loader";

const BlogListingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.4 seconds

    // Cleanup the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto">{loading ? <Loader /> : <BlogsPageList />}</div>
  );
};

export default BlogListingPage;
