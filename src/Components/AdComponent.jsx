import React, { useEffect, useRef } from 'react';

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://zmonei.com/na/waWQiOjEwNTM2NTMsInNpZCI6MTMwNTU4OCwid2lkIjo1MTg2NzAsInNyYyI6Mn0=eyJ.js";
      adRef.current.appendChild(script);

      return () => {
        adRef.current.removeChild(script);
      };
    }
  }, []);

  return (
    <div ref={adRef}>
      {/* The ad will be inserted here */}
    </div>
  );
};

export default AdComponent;
