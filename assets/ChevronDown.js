import React from "react";

const ChevronDown = (props) => {
  const { ...otherProps } = props;
  return (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...otherProps}>
      <path d="M8 0C8.28125 0 8.53125 0.09375 8.71875 0.28125L14.7188 6.28125C15.125 6.65625 15.125 7.3125 14.7188 7.6875C14.3438 8.09375 13.6875 8.09375 13.3125 7.6875L8 2.40625L2.71875 7.6875C2.34375 8.09375 1.6875 8.09375 1.3125 7.6875C0.90625 7.3125 0.90625 6.65625 1.3125 6.28125L7.3125 0.28125C7.5 0.09375 7.75 0 8 0Z" fill="#52525B"/>
    </svg>
  );
};

export default ChevronDown;
