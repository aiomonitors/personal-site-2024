interface InstagramProps {
  size?: number;
}

export default function Instagram({ size = 16 }: InstagramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.5 -0.5 16 16"
      id="Instagram-Logo--Streamline-Ultimate"
      height={size}
      width={size}
    >
      <desc>{"Instagram Logo Streamline Icon: https://streamlinehq.com"}</desc>
      <g id="Instagram-Logo--Streamline-Ultimate.svg">
        <path
          d="M11.5625 0h-8.125A3.4437499999999996 3.4437499999999996 0 0 0 0 3.4375v8.125A3.4437499999999996 3.4437499999999996 0 0 0 3.4375 15h8.125a3.4437499999999996 3.4437499999999996 0 0 0 3.4375 -3.4375v-8.125A3.4437499999999996 3.4437499999999996 0 0 0 11.5625 0ZM12.5 10a2.5 2.5 0 0 1 -2.5 2.5H5a2.5 2.5 0 0 1 -2.5 -2.5V5a2.5 2.5 0 0 1 2.5 -2.5h5a2.5 2.5 0 0 1 2.5 2.5Z"
          fill="#000000"
          strokeWidth={1}
        />
        <path
          d="M5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0 -5 0"
          fill="#000000"
          strokeWidth={1}
        />
        <path
          d="M10 4.375a0.625 0.625 0 1 0 1.25 0 0.625 0.625 0 1 0 -1.25 0"
          fill="#000000"
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}
