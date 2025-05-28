import React, { Suspense, lazy, useState, useEffect } from "react";

const BallCanvas = lazy(() => import("./canvas/Ball"));

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const techToRender = isDesktop ? technologies.slice(2) : technologies;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {techToRender.map((technology) => (
        <div className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}>
          <Suspense fallback={<div>Loading...</div>}>
            <BallCanvas icon={technology.icon} />
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
