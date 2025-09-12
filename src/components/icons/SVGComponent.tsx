import * as React from "react";
const SVGComponent = (props: {className: string}) => (
  <svg className={props.className}>
    <filter id="noise">
      <feTurbulence id="turbulence">
        <animate
          attributeName="baseFrequency"
          dur="8s"
          values="0.9 0.9;0.8 0.8; 0.9 0.9"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale={60} />
    </filter>
  </svg>
);
export default SVGComponent;
