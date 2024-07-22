import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const TeslaIcon = ({ width = 24, height = 24, className = undefined }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      zoomAndPan="magnify"
      viewBox="0 0 1125 1125"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={`fill-current ${className}`}
    >
      <path 
        d="M 824.539062 975.882812 L 824.539062 1034.246094 L 843.253906 1034.246094 L 843.253906 995.386719 L 911.375 995.386719 L 911.375 1034.246094 L 930.078125 1034.246094 L 930.078125 975.984375 L 824.539062 975.882812 M 841.167969 957.003906 L 913.136719 957.003906 C 923.132812 955.015625 930.566406 946.195312 932.664062 937.660156 L 821.644531 937.660156 C 823.71875 946.199219 831.261719 955.015625 841.167969 957.003906 M 767.851562 1034.285156 C 777.289062 1030.28125 782.367188 1023.363281 784.308594 1015.265625 L 700.363281 1015.265625 L 700.417969 937.710938 L 681.597656 937.761719 L 681.597656 1034.285156 L 767.851562 1034.285156 M 541.660156 956.742188 L 608.128906 956.742188 C 618.148438 953.832031 626.5625 946.199219 628.613281 937.734375 L 523.03125 937.734375 L 523.03125 994.773438 L 609.445312 994.773438 L 609.445312 1014.792969 L 541.660156 1014.84375 C 531.039062 1017.808594 522.03125 1024.941406 517.539062 1034.359375 L 523.03125 1034.257812 L 628.011719 1034.257812 L 628.011719 975.8125 L 541.660156 975.8125 L 541.660156 956.742188 M 377.582031 956.925781 L 449.523438 956.925781 C 459.535156 954.929688 466.972656 946.117188 469.058594 937.574219 L 358.046875 937.574219 C 360.117188 946.117188 367.667969 954.929688 377.582031 956.925781 M 377.582031 995.074219 L 449.523438 995.074219 C 459.535156 993.101562 466.972656 984.277344 469.058594 975.730469 L 358.046875 975.730469 C 360.117188 984.28125 367.667969 993.101562 377.582031 995.074219 M 377.582031 1034.273438 L 449.523438 1034.273438 C 459.535156 1032.285156 466.972656 1023.464844 469.058594 1014.925781 L 358.046875 1014.925781 C 360.117188 1023.46875 367.667969 1032.285156 377.582031 1034.273438 M 190.410156 937.808594 C 192.574219 946.246094 199.878906 954.867188 209.898438 957.027344 L 240.183594 957.027344 L 241.726562 957.636719 L 241.726562 1034.058594 L 260.636719 1034.058594 L 260.636719 957.636719 L 262.355469 957.027344 L 292.667969 957.027344 C 302.796875 954.417969 309.945312 946.246094 312.070312 937.808594 L 312.070312 937.625 L 190.410156 937.625 L 190.410156 937.808594 M 561.574219 746.871094 L 656.066406 215.445312 C 746.132812 215.445312 774.542969 225.320312 778.644531 265.632812 C 778.644531 265.632812 839.0625 243.105469 869.539062 197.351562 C 750.621094 142.246094 631.136719 139.761719 631.136719 139.761719 L 561.417969 224.679688 L 561.574219 224.671875 L 491.855469 139.75 C 491.855469 139.75 372.367188 142.238281 253.46875 197.339844 C 283.914062 243.09375 344.359375 265.621094 344.359375 265.621094 C 348.484375 225.308594 376.859375 215.429688 466.320312 215.367188 L 561.574219 746.871094 " 
        />
      <path 
        d="M 561.539062 115.234375 C 657.664062 114.5 767.691406 130.105469 880.328125 179.195312 C 895.382812 152.101562 899.253906 140.125 899.253906 140.125 C 776.125 91.410156 660.816406 74.738281 561.523438 74.320312 C 462.234375 74.738281 346.933594 91.414062 223.824219 140.125 C 223.824219 140.125 229.316406 154.875 242.734375 179.195312 C 355.347656 130.105469 465.394531 114.5 561.523438 115.234375 L 561.539062 115.234375 " 
      />
    </svg>
  );
}
export default TeslaIcon;