import { useEffect, useState } from "react";

const CountAnimation = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10); // Parse the target to an integer
    const duration = 2000; // Duration in milliseconds
    const incrementTime = Math.abs(Math.floor(duration / end));

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="lg:text-[6.25rem] sm:text-[64px] text-[2.25rem] tracking-[-1px] leading-[36px] text-[#373737]  font-san_medium h-fit w-fit lg:leading-[108%] lg:tracking-[-0.25px]">
      {count}+
    </div>
  );
};

export default CountAnimation;
