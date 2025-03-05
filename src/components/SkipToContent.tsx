
import React, { useState } from 'react';

const SkipToContent = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 bg-primary text-white px-4 py-3 rounded-md 
        transition-transform duration-200 focus:outline-none
        ${isFocused ? "transform-none" : "-translate-y-20"}
      `}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
