import React from 'react';

interface MetaLogoProps {
  className?: string;
  size?: number;
  textColor?: string;
}

export const MetaLogo: React.FC<MetaLogoProps> = ({
  className = '',
  size = 22,
  textColor = 'text-white',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg
        width={size}
        height={Math.round(size * 0.65)}
        viewBox="0 0 44 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90 transition-opacity hover:opacity-100"
      >
        <path
          d="M10.9 2.1C6.2 2.1 2.3 5.9 2.3 12.3c0 7.3 4.9 13.6 10.9 13.6 4.3 0 7.2-2.9 9.3-6.1 2.1 3.2 5 6.1 9.3 6.1 6 0 10.9-6.3 10.9-13.6 0-6.4-3.9-10.2-8.6-10.2-4.1 0-7.1 2.5-9.6 5.8C21.7 4.6 17 2.1 10.9 2.1zm1.2 5.1c3.5 0 6.6 3.7 8.3 6.8-2 3.8-4.7 7.7-8.1 7.7-3.2 0-5.8-3.7-5.8-8.5 0-4.1 2.2-6 5.6-6zm19.8 0c3.4 0 5.6 1.9 5.6 6 0 4.8-2.6 8.5-5.8 8.5-3.4 0-6.1-3.9-8.1-7.7 1.7-3.1 4.8-6.8 8.3-6.8z"
          fill="currentColor"
        />
      </svg>
      <span className={`text-[15px] font-semibold tracking-tight ${textColor}`}>
        Meta
      </span>
    </div>
  );
};
