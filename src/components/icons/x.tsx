import React from 'react';

interface XProps {
  size?: number;
}

export default function X({ size = 16 }: XProps) {
  return (
    <svg
      role="img"
      viewBox="-0.5 -0.5 16 16"
      xmlns="http://www.w3.org/2000/svg"
      id="X--Streamline-Simple-Icons"
      height={size}
      width={size}
    >
      <desc>{"X Streamline Icon: https://streamlinehq.com"}</desc>
      <title>{"X"}</title>
      <path
        d="M11.813125 0.7206250000000001h2.3000000000000003l-5.0249999999999995 5.7437499999999995L15 14.27875h-4.62875l-3.625 -4.74 -4.14875 4.74H0.29625l5.375 -6.14375L0 0.72125h4.74625l3.2768750000000004 4.3325000000000005ZM11.00625 12.9025h1.274375L4.05375 2.0250000000000004H2.6862500000000002Z"
        strokeWidth={1}
      />
    </svg>
  );
}
