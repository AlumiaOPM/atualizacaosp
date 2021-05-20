import React from 'react';

export default function Disc(props) {
  const {fill} = props;

  return (
    <div style={{
      position: 'relative',
      zIndex: 10,
      transform: "scale(-1, 1)",
      width: "100%",
      ...props.style
    }}>
      <svg width="1440" height="188" viewBox="0 0 1440 188" xmlns="http://www.w3.org/2000/svg">
        <path d="M702 108C313.2 108 72 36 0 0V188H702H1440V0C1356 36 1090.8 108 702 108Z" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="720" y1="0" x2="720" y2="384" gradientUnits="userSpaceOnUse">
            <stop offset="0.223958" stop-color={fill} />
            <stop offset="1" stop-color={fill} />
          </linearGradient>
        </defs>
      </svg>

    </div>
  )
}
