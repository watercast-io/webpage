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
        d="M 679.785156 629.726562 C 623.167969 671.457031 541.101562 693.722656 470.445312 693.722656 C 371.375 693.722656 282.183594 657.078125 214.707031 596.136719 C 209.40625 591.34375 214.15625 584.8125 220.519531 588.542969 C 293.339844 630.914062 383.375 656.402344 476.382812 656.402344 C 539.109375 656.402344 608.109375 643.421875 671.558594 616.492188 C 681.140625 612.421875 689.15625 622.769531 679.785156 629.726562 " 
      />
      <path  
        d="M 703.324219 602.792969 C 696.113281 593.546875 655.484375 598.425781 637.246094 600.589844 C 631.691406 601.265625 630.84375 596.433594 635.847656 592.953125 C 668.207031 570.179688 721.304688 576.753906 727.496094 584.386719 C 733.6875 592.0625 725.882812 645.289062 695.476562 670.691406 C 690.8125 674.59375 686.355469 672.515625 688.4375 667.34375 C 695.265625 650.292969 710.574219 612.082031 703.324219 602.792969 " 
      />
      <path 
        d="M 638.519531 432.175781 L 638.519531 410.039062 C 638.519531 406.6875 641.0625 404.4375 644.117188 404.4375 L 743.230469 404.4375 C 746.410156 404.4375 748.957031 406.730469 748.957031 410.039062 L 748.957031 428.996094 C 748.914062 432.175781 746.242188 436.332031 741.492188 442.90625 L 690.132812 516.234375 C 709.21875 515.769531 729.363281 518.609375 746.664062 528.363281 C 750.566406 530.566406 751.628906 533.792969 751.925781 536.972656 L 751.925781 560.59375 C 751.925781 563.816406 748.363281 567.59375 744.628906 565.640625 C 714.136719 549.652344 673.636719 547.914062 639.917969 565.8125 C 636.484375 567.679688 632.878906 563.945312 632.878906 560.722656 L 632.878906 538.289062 C 632.878906 534.683594 632.921875 528.53125 636.523438 523.0625 L 696.027344 437.730469 L 644.242188 437.730469 C 641.0625 437.730469 638.519531 435.484375 638.519531 432.175781 M 276.96875 570.308594 L 246.8125 570.308594 C 243.929688 570.09375 241.640625 567.933594 241.425781 565.175781 L 241.425781 410.417969 C 241.425781 407.324219 244.015625 404.863281 247.238281 404.863281 L 275.355469 404.863281 C 278.28125 404.988281 280.613281 407.238281 280.828125 410.035156 L 280.828125 430.269531 L 281.378906 430.269531 C 288.714844 410.714844 302.5 401.597656 321.074219 401.597656 C 339.945312 401.597656 351.738281 410.714844 360.21875 430.269531 C 367.515625 410.714844 384.097656 401.597656 401.867188 401.597656 C 414.503906 401.597656 428.332031 406.816406 436.769531 418.519531 C 446.3125 431.539062 444.363281 450.457031 444.363281 467.039062 L 444.320312 564.710938 C 444.320312 567.804688 441.734375 570.308594 438.511719 570.308594 L 408.398438 570.308594 C 405.386719 570.097656 402.96875 567.679688 402.96875 564.710938 L 402.96875 482.6875 C 402.96875 476.15625 403.5625 459.867188 402.121094 453.679688 C 399.875 443.289062 393.132812 440.359375 384.394531 440.359375 C 377.097656 440.359375 369.464844 445.238281 366.367188 453.042969 C 363.273438 460.847656 363.570312 473.90625 363.570312 482.6875 L 363.570312 564.707031 C 363.570312 567.804688 360.984375 570.308594 357.761719 570.308594 L 327.648438 570.308594 C 324.59375 570.09375 322.21875 567.679688 322.21875 564.707031 L 322.175781 482.6875 C 322.175781 465.425781 325.019531 440.023438 303.601562 440.023438 C 281.929688 440.023438 282.777344 464.789062 282.777344 482.6875 L 282.777344 564.707031 C 282.777344 567.804688 280.191406 570.308594 276.96875 570.308594 M 834.285156 401.597656 C 879.027344 401.597656 903.246094 440.023438 903.246094 488.878906 C 903.246094 536.082031 876.484375 573.53125 834.285156 573.53125 C 790.347656 573.53125 766.429688 535.105469 766.429688 487.222656 C 766.429688 439.046875 790.644531 401.597656 834.285156 401.597656 M 834.539062 433.195312 C 812.316406 433.195312 810.917969 463.476562 810.917969 482.347656 C 810.917969 501.261719 810.621094 541.636719 834.285156 541.636719 C 857.65625 541.636719 858.757812 509.066406 858.757812 489.21875 C 858.757812 476.15625 858.207031 460.546875 854.261719 448.164062 C 850.867188 437.390625 844.125 433.195312 834.542969 433.195312 M 961.265625 570.308594 L 931.238281 570.308594 C 928.226562 570.09375 925.808594 567.679688 925.808594 564.707031 L 925.765625 409.910156 C 926.019531 407.070312 928.523438 404.863281 931.574219 404.863281 L 959.523438 404.863281 C 962.15625 404.988281 964.316406 406.773438 964.910156 409.1875 L 964.910156 432.855469 L 965.460938 432.855469 C 973.902344 411.691406 985.734375 401.597656 1006.558594 401.597656 C 1020.085938 401.597656 1033.277344 406.472656 1041.757812 419.835938 C 1049.648438 432.21875 1049.648438 453.042969 1049.648438 468.011719 L 1049.648438 565.429688 C 1049.308594 568.144531 1046.804688 570.308594 1043.839844 570.308594 L 1013.597656 570.308594 C 1010.839844 570.09375 1008.550781 568.058594 1008.253906 565.429688 L 1008.253906 481.371094 C 1008.253906 464.449219 1010.207031 439.679688 989.382812 439.679688 C 982.046875 439.679688 975.300781 444.601562 971.953125 452.066406 C 967.710938 461.523438 967.160156 470.9375 967.160156 481.371094 L 967.160156 564.707031 C 967.117188 567.804688 964.488281 570.308594 961.265625 570.308594 M 559.507812 496.386719 C 559.507812 508.132812 559.804688 517.929688 553.867188 528.363281 C 549.074219 536.84375 541.441406 542.0625 533 542.0625 C 521.421875 542.0625 514.636719 533.242188 514.636719 520.21875 C 514.636719 494.519531 537.667969 489.855469 559.507812 489.855469 L 559.507812 496.386719 M 589.914062 569.882812 C 587.921875 571.664062 585.039062 571.792969 582.792969 570.605469 C 572.78125 562.292969 570.957031 558.433594 565.488281 550.5 C 548.945312 567.382812 537.199219 572.429688 515.78125 572.429688 C 490.378906 572.429688 470.65625 556.777344 470.65625 525.4375 C 470.65625 500.964844 483.890625 484.296875 502.804688 476.15625 C 519.175781 468.945312 542.035156 467.671875 559.507812 465.679688 L 559.507812 461.777344 C 559.507812 454.609375 560.058594 446.128906 555.816406 439.9375 C 552.171875 434.382812 545.128906 432.089844 538.894531 432.089844 C 527.402344 432.089844 517.183594 437.984375 514.679688 450.199219 C 514.171875 452.914062 512.175781 455.585938 509.421875 455.714844 L 480.199219 452.574219 C 477.738281 452.023438 474.984375 450.03125 475.703125 446.257812 C 482.40625 410.800781 514.46875 400.113281 543.136719 400.113281 C 557.8125 400.113281 576.980469 404.015625 588.558594 415.128906 C 603.234375 428.824219 601.832031 447.105469 601.832031 466.996094 L 601.832031 513.984375 C 601.832031 528.109375 607.6875 534.300781 613.199219 541.933594 C 615.109375 544.648438 615.53125 547.914062 613.074219 549.949219 C 606.921875 555.082031 595.980469 564.625 589.960938 569.96875 L 589.917969 569.882812 M 164.199219 496.386719 C 164.199219 508.132812 164.496094 517.929688 158.554688 528.363281 C 153.765625 536.84375 146.171875 542.0625 137.691406 542.0625 C 126.113281 542.0625 119.367188 533.242188 119.367188 520.21875 C 119.367188 494.519531 142.398438 489.855469 164.199219 489.855469 L 164.199219 496.386719 M 194.605469 569.882812 C 192.613281 571.664062 189.730469 571.792969 187.480469 570.605469 C 177.472656 562.292969 175.691406 558.433594 170.179688 550.5 C 153.636719 567.382812 141.933594 572.429688 120.472656 572.429688 C 95.109375 572.429688 75.347656 556.777344 75.347656 525.4375 C 75.347656 500.964844 88.621094 484.296875 107.496094 476.15625 C 123.867188 468.945312 146.722656 467.671875 164.199219 465.679688 L 164.199219 461.777344 C 164.199219 454.609375 164.75 446.128906 160.550781 439.9375 C 156.859375 434.382812 149.820312 432.089844 143.628906 432.089844 C 132.136719 432.089844 121.871094 437.984375 119.367188 450.199219 C 118.859375 452.914062 116.867188 455.585938 114.152344 455.714844 L 84.890625 452.574219 C 82.429688 452.023438 79.714844 450.03125 80.394531 446.257812 C 87.136719 410.800781 119.15625 400.113281 147.828125 400.113281 C 162.5 400.113281 181.671875 404.015625 193.25 415.128906 C 207.921875 428.824219 206.523438 447.105469 206.523438 466.996094 L 206.523438 513.984375 C 206.523438 528.109375 212.375 534.300781 217.890625 541.933594 C 219.839844 544.648438 220.265625 547.914062 217.804688 549.949219 C 211.65625 555.082031 200.714844 564.625 194.691406 569.96875 L 194.605469 569.882812 "
      />
    </svg>
  );
}
export default TeslaIcon;