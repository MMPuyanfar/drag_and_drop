import React from 'react';

interface ItemIconPropsType {
  fillColor?: string;
}

export function ItemIcon({
  fillColor = "#0F1729",
}: ItemIconPropsType) {
  return (
    <svg
      width='80px'
      height='80px'
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 4.34315 3.34315 3 5 3H8.74586C9.80773 3 10.826 3.42223 11.5763 4.17364L13.4 6H16.9925C19.7576 6 21.9977 8.2443 21.9925 11.0094L21.9812 17.0094C21.976 19.7671 19.739 22 16.9812 22H7C4.23858 22 2 19.7614 2 17V6ZM11.5722 7L10.1611 5.58682C9.78595 5.21111 9.27679 5 8.74586 5H5C4.44772 5 4 5.44772 4 6V9H8.74586C9.2768 9 9.78595 8.78889 10.1611 8.41318L11.5722 7ZM4 11V17C4 18.6569 5.34315 20 7 20H16.9812C18.6359 20 19.9781 18.6603 19.9812 17.0056L19.9925 11.0056C19.9956 9.34658 18.6515 8 16.9925 8H13.4L11.5763 9.82636C10.826 10.5778 9.80773 11 8.74586 11H4Z"
        fill={fillColor}
      />
    </svg>
  );
}
