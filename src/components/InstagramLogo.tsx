import React from 'react';

interface InstagramLogoProps {
  className?: string;
  size?: number;
}

export const InstagramLogo: React.FC<InstagramLogoProps> = ({ className = '', size = 48 }) => {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      title="Instagram"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm transition-transform duration-200 hover:scale-105"
      >
        <defs>
          <linearGradient id="ig-gradient-fill" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffd600" />
            <stop offset="15%" stopColor="#ff7a00" />
            <stop offset="50%" stopColor="#ff0069" />
            <stop offset="75%" stopColor="#d300c5" />
            <stop offset="100%" stopColor="#7638fa" />
          </linearGradient>
          <radialGradient
            id="ig-radial-fill"
            cx="30%"
            cy="105%"
            r="120%"
            fx="30%"
            fy="105%"
          >
            <stop offset="0%" stopColor="#ffdd55" />
            <stop offset="20%" stopColor="#ff543e" />
            <stop offset="45%" stopColor="#c837ab" />
            <stop offset="70%" stopColor="#5851db" />
            <stop offset="90%" stopColor="#405de6" />
          </radialGradient>
        </defs>

        {/* Outer Rounded Squircle */}
        <rect
          x="2"
          y="2"
          width="96"
          height="96"
          rx="24"
          fill="url(#ig-radial-fill)"
        />

        {/* Inner camera outline */}
        <rect
          x="18"
          y="18"
          width="64"
          height="64"
          rx="18"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7.5"
        />

        {/* Center lens circle */}
        <circle
          cx="50"
          cy="50"
          r="16"
          fill="none"
          stroke="#ffffff"
          strokeWidth="7.5"
        />

        {/* Flash dot */}
        <circle
          cx="68"
          cy="32"
          r="4.5"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};
