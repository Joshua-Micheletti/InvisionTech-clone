import React from "react";
import { useState, useEffect } from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) =>
          setIntersecting(entry.isIntersecting)
        );
    
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
      }, [ref]);
  
    return(isIntersecting);
}
  