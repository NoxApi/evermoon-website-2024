const Star = ({
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
      viewBox="0 0 20 20"
    >
      <path
        d="M10.0003 0.666672C10.0003 0.666672 11.0938 3.62684 13.7337 6.26667C16.3735 8.90651 19.3337 10 19.3337 10C19.3337 10 16.3735 11.0935 13.7337 13.7333C11.0938 16.3732 10.0003 19.3333 10.0003 19.3333C10.0003 19.3333 8.90689 16.3732 6.26699 13.7333C3.6271 11.0934 0.666992 10 0.666992 10C0.666992 10 3.62713 8.90654 6.26699 6.26667C8.90686 3.62681 10.0003 0.666672 10.0003 0.666672Z"
        fill="#F1E3B5"
      />
    </svg>
  );
};

export default Star;
