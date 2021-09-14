import React from "react";

function SearchIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
      viewBox="0 0 25 25"
    >
      <path
        fill="#999"
        d="M11.01 0C4.938 0 0 4.939 0 11.01c0 6.07 4.939 11.009 11.01 11.009 6.07 0 11.009-4.939 11.009-11.01C22.019 4.94 17.08 0 11.009 0zm0 19.986c-4.95 0-8.977-4.027-8.977-8.977s4.027-8.976 8.976-8.976c4.95 0 8.977 4.027 8.977 8.976 0 4.95-4.027 8.977-8.977 8.977z"
      ></path>
      <g clipPath="url(#clip0)">
        <path
          fill="#999"
          d="M24.702 23.265l-5.826-5.826a1.016 1.016 0 10-1.437 1.437l5.826 5.826a1.013 1.013 0 001.437 0 1.016 1.016 0 000-1.437z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0H25V25H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default SearchIcon;
