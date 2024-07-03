export default function Arrowicon({
  width,
  height,
  className,
}: {
  width: any;
  height: any;
  className: any;
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.06027 0.675049L1.83028 0.905048L6.83028 5.95505L6.07028 6.71505L0.780273 1.40505L4.10028 8.03505L0.810272 14.635L6.10028 9.32505L6.86028 10.0851L1.86028 15.0851L2.09027 15.315L9.39027 7.98505L2.06027 0.675049ZM6.33028 9.03505L7.33028 7.98505L6.33028 6.98505L7.09027 6.22505L8.89027 8.03505L7.09027 9.84505L6.33028 9.03505Z" />
    </svg>
  );
}
