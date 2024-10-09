const Circle = ({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className: any;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 8"
      fill="none"
    >
      <path
        d="M24 4C24 6.20914 18.6274 8 12 8C5.37258 8 0 6.20914 0 4C0 1.79086 5.37258 0 12 0C18.6274 0 24 1.79086 24 4Z"
        fill="url(#paint0_linear_7547_1964)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7547_1964"
          x1="0"
          y1="4"
          x2="24"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7BD2EE" />
          <stop offset="1" stop-color="#076CC0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
