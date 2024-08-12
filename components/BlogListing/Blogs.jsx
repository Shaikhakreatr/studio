import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Blogs = ( { blogData,currentPageBlog, itemsPerPageBlog, limit } ) => {

  const blogsToShow = limit ? blogData?.slice(0, limit) : blogData;
  // Paginate the items
  const indexOfLastItem = currentPageBlog * itemsPerPageBlog;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageBlog;
  const itemsToShow = blogsToShow?.slice(indexOfFirstItem, indexOfLastItem);
  const itemsToShowList = blogData?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-x-[32px] sm:gap-x-[24px] sm:gap-y-[48px] lg:gap-y-[72px] gap-y-[24px]">
      {itemsToShow?.map((blog) => (
        <Link
          href={`/blogs/${blog.id}`}
          key={blog.id}
          className="sm:gap-y-[20px] gap-y-[20px] lg:gap-y-[30px] flex flex-col"
        >
          <Image
            src={blog.coverImg}
            alt={blog.title}
            height={294}
            width={403}
            className="lg:h-[294px] xl:min-w-[403px] object-cover object-center rounded-[15px] lg:min-w-[350px] h-[256px] w-[350px]"
          />
          <h2 className="lg:text-[24px]  sm:text-[20px] text-[16px] leading-[20px] tracking-[-0.25px] sm:leading-[30px] text-[#373737] font-san_book">
            {blog.title}
          </h2>
        </Link>
      ))}
    </div>
    
  );
};

export default Blogs;
