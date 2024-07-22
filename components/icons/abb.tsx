import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const AbbIcon = ({ width = 24, height = 24, className = undefined }: IconProps) => {
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
        d="M 607.121094 751.292969 L 630.007812 751.292969 C 698.660156 747.859375 746.714844 694.082031 746.714844 630.007812 C 746.714844 608.265625 742.136719 586.527344 731.839844 569.363281 L 607.121094 569.363281 Z M 481.261719 568.21875 L 595.679688 568.21875 L 595.679688 751.292969 L 481.261719 751.292969 Z M 724.976562 556.777344 C 713.535156 540.757812 697.515625 528.171875 680.351562 519.019531 C 700.945312 504.144531 714.675781 480.117188 714.675781 453.800781 C 714.675781 409.175781 679.207031 373.707031 634.582031 373.707031 L 607.121094 373.707031 L 607.121094 556.777344 Z M 481.261719 373.707031 L 595.679688 373.707031 L 595.679688 556.777344 L 481.261719 556.777344 Z M 916.054688 751.292969 L 938.941406 751.292969 C 1007.59375 747.859375 1055.648438 694.082031 1055.648438 630.007812 C 1055.648438 608.265625 1051.070312 586.527344 1040.773438 569.363281 L 916.054688 569.363281 Z M 790.195312 568.21875 L 904.613281 568.21875 L 904.613281 751.292969 L 790.195312 751.292969 Z M 1033.910156 556.777344 C 1022.46875 540.757812 1006.449219 528.171875 989.285156 519.019531 C 1009.882812 504.144531 1023.613281 480.117188 1023.613281 453.800781 C 1023.613281 409.175781 988.140625 373.707031 943.515625 373.707031 L 916.054688 373.707031 L 916.054688 556.777344 Z M 790.195312 373.707031 L 904.613281 373.707031 L 904.613281 556.777344 L 790.195312 556.777344 Z M 164.316406 751.292969 L 191.777344 671.199219 L 252.421875 671.199219 L 252.421875 568.21875 L 134.566406 568.21875 L 69.347656 751.292969 Z M 138 556.777344 L 252.421875 556.777344 L 252.421875 373.707031 L 203.21875 373.707031 Z M 351.964844 751.292969 L 446.933594 751.292969 L 381.714844 568.21875 L 263.863281 568.21875 L 263.863281 671.199219 L 324.503906 671.199219 Z M 263.863281 373.707031 L 263.863281 556.777344 L 378.28125 556.777344 L 313.0625 373.707031 Z M 263.863281 373.707031 "
      />
    </svg>
  );
}
export default AbbIcon;