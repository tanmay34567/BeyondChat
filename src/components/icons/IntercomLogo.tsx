import React from 'react';

interface IntercomLogoProps {
  className?: string;
}

export const IntercomLogo: React.FC<IntercomLogoProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 32 32" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4C9.373 4 4 9.373 4 16v11a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V16c0-6.627-5.373-12-12-12zm-6 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm6 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-12 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm8 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
      />
    </svg>
  );
};