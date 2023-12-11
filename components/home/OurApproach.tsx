import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HorizontalScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement[]>([]);
  const approachRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (containerRef.current && approachRef.current) {
      const container = containerRef.current;

      const sections = gsap.utils.toArray(".panel");
      sectionRefs.current = sections.map(
        (section) => section as HTMLDivElement
      );

      gsap.to(sectionRefs.current, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: approachRef.current!,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${container.offsetWidth}px`,
          markers: true,
        },
      });
    }
  }, []);

  return (
    <div ref={approachRef} className="relative h-[500vh]">
      <div
        ref={containerRef}
        className="container "
        style={{
          width: "400vw",
          height: "100vh",
          // position: 'relative',
          // overflow: 'hidden'
        }}
      >
        <div
          className="panel border flex items-center justify-center"
          style={{
            minWidth: "50vw",
            height: "100vh",
            display: "inline-block",
            textAlign: "center",
            fontSize: "3em",
          }}
        >
          Section 1
        </div>
        <div
          className="panel"
          style={{
            minWidth: "50vw",
            height: "100vh",
            display: "inline-block",
            textAlign: "center",
            fontSize: "3em",
          }}
        >
          Section 2
        </div>
        <div
          className="panel"
          style={{
            minWidth: "50vw",
            height: "100vh",
            display: "inline-block",
            textAlign: "center",
            fontSize: "3em",
          }}
        >
          Section 3
        </div>
        {/* Add more sections if needed */}
      </div>
    </div>
  );
};

export default HorizontalScroll;
