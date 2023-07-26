import React from "react";

const RectangleStep1 = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <svg
          width="124"
          height="125"
          viewBox="0 0 124 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.113281"
            y="0.30188"
            width="123.773"
            height="123.773"
            rx="8"
            fill="#434E61"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            width="41"
            height="36"
            viewBox="0 0 41 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.881299 35.5927L16.4813 0.59271H24.4813L40.1313 35.5927H31.6313L18.8313 4.69271H22.0313L9.1813 35.5927H0.881299ZM8.6813 28.0927L10.8313 21.9427H28.8313L31.0313 28.0927H8.6813Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RectangleStep1;
