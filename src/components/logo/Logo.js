import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill:
        theme.palette.type === "dark"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 467.000000 306.000000"
      className={classes.svgHover}
      style={{ paddingTop: "10px" }}
    >
      <g
        transform="translate(0.000000,306.000000) scale(0.100000,-0.100000)"
        fill=""
        stroke="none"
      >
        <path
          className="cls-1"
          d="M1033 2631 c-55 -26 -83 -71 -83 -135 0 -43 4 -53 39 -87 l39 -39
1041 0 c1176 0 1114 4 1281 -78 79 -38 110 -61 181 -132 147 -147 209 -307
209 -546 0 -111 -4 -145 -25 -218 -64 -222 -199 -383 -400 -481 -115 -56 -209
-75 -369 -75 l-124 0 -45 -62 c-43 -61 -105 -124 -177 -181 l-35 -28 315 4
c287 3 322 5 394 25 370 102 638 378 737 759 29 112 36 301 15 427 -69 416
-345 730 -736 837 l-85 24 -1065 2 c-1036 3 -1066 2 -1107 -16z"
        />
        <path
          className="cls-1"
          d="M2530 1803 c0 -473 -5 -516 -61 -632 -41 -84 -150 -198 -229 -240
-147 -79 -117 -75 -688 -81 l-514 -5 -50 -90 c-27 -49 -62 -112 -77 -140 l-28
-50 576 2 c342 2 602 7 639 13 337 56 603 300 693 635 20 73 22 111 26 425 2
190 1 400 -3 468 l-6 122 -139 0 -139 0 0 -427z"
        />
        <path
          className="cls-1"
          d="M645 1549 c-42 -77 -75 -141 -73 -142 1 -1 301 -1 665 1 l662 3 74
134 c41 74 72 137 69 140 -3 3 -301 5 -663 5 l-657 0 -77 -141z"
        />
      </g>
    </svg>
  );
};
