import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='relative z-0'>
          <Experience />
          {isDesktop && <StarsCanvas />}
        </div>

        <div className='relative z-0'>
          <Tech />
           <StarsCanvas />
        </div>

        <div className='relative z-0'>
          <Works />
          <StarsCanvas />
        </div>
        {/* <Feedbacks /> */}
        {/* <div className='relative z-0'>
          <Contact />
          {isDesktop && <StarsCanvas />}
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
