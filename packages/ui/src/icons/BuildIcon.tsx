import React from 'react';

function BuildIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M8.31537 2.66461C6.97537 1.32461 4.96871 1.05128 3.35537 1.83794L5.77537 4.25794C6.03537 4.51794 6.03537 4.93794 5.77537 5.19794L4.71537 6.25794C4.45537 6.52461 4.03537 6.52461 3.77537 6.25794L1.35537 3.83794C0.575373 5.45794 0.848707 7.45128 2.18871 8.79128C3.42871 10.0313 5.24204 10.3579 6.78204 9.77794L12.0887 15.0846C12.7754 15.7713 13.882 15.7713 14.562 15.0846C15.2487 14.3979 15.2487 13.2913 14.562 12.6113L9.28204 7.32461C9.89537 5.76461 9.57537 3.92461 8.31537 2.66461Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default BuildIcon;
