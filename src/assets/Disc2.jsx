import React from 'react';

export default function Disc2(props) {
  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      transform: "scale(-1, 1)",
      width: "110%",
      left: "-10%",

      ...props.style
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M615.2,96.7C240.2,97.8,0,18.9,0,0v100h1000V0C1000,19.2,989.8,96,615.2,96.7z"></path>
      </svg>
    </div>
  )
}