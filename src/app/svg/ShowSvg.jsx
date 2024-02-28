export default function ShowSvg({ className, width = 21, height = 20 }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="var(--third-color)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_104_3669)">
        <path d="M10.3633 16.25C3.82062 16.25 0.576875 10.5463 0.442031 10.3036C0.337031 10.1147 0.337031 9.88516 0.442031 9.69625C0.576875 9.45375 3.82062 3.75 10.3633 3.75C16.9059 3.75 20.1497 9.45375 20.2845 9.69641C20.3895 9.88531 20.3895 10.1148 20.2845 10.3038C20.1497 10.5462 16.9059 16.25 10.3633 16.25ZM1.72375 9.99906C2.46719 11.1258 5.38609 15 10.3633 15C15.3562 15 18.2622 11.1289 19.0028 10.0009C18.2594 8.87422 15.3405 5 10.3633 5C5.37031 5 2.46438 8.87109 1.72375 9.99906ZM10.3633 13.75C8.29547 13.75 6.61328 12.0678 6.61328 10C6.61328 7.93219 8.29547 6.25 10.3633 6.25C12.4311 6.25 14.1133 7.93219 14.1133 10C14.1133 12.0678 12.4311 13.75 10.3633 13.75ZM10.3633 7.5C8.98484 7.5 7.86328 8.62156 7.86328 10C7.86328 11.3784 8.98484 12.5 10.3633 12.5C11.7417 12.5 12.8633 11.3784 12.8633 10C12.8633 8.62156 11.7417 7.5 10.3633 7.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_104_3669">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.363281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
