import React from 'react';

interface EmailProps {
  size?: number;
}

export default function Email({ size = 16 }: EmailProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 -0.5 16 16"
      id="Email-Envelope-3--Streamline-Nova"
      height={size}
      width={size}
    >
      <desc>
        {"Email Envelope 3 Streamline Icon: https://streamlinehq.com"}
      </desc>
      <defs />
      <path
        d="M7.531625 8.2489375L14.21275 2.374875C14.180625 2.3660625 14.148 2.3594375000000003 14.115 2.355H0.885C0.8544375 2.358875 0.8242499999999999 2.3649999999999998 0.794625 2.3733750000000002Z"
        fill="#000000"
        strokeWidth={1}
      />
      <path
        d="M8.4341875 9.356625C8.1653125 9.570375 7.8324375 9.687625 7.489 9.6895625C7.1659375 9.68975 6.852062500000001 9.581875 6.5974375 9.3830625L0.15 3.7610624999999995V11.174999999999999C0.15 11.986875 0.808125 12.6450625 1.62 12.645H13.38C14.191812500000001 12.6449375 14.850000000000001 11.9868125 14.850000000000001 11.174999999999999V3.7618125000000004Z"
        fill="#000000"
        strokeWidth={1}
      />
    </svg>
  );
}
