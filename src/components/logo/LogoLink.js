import React from "react";
import { Link, Tooltip, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Resume from "../../settings/resume.json";
import { Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
  svg: {
    position: "fixed",
    width: "50px",
    height: "50px",
    top: theme.spacing(1.75),
    left: theme.spacing(6),
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: "50%",
    "@media (max-width: 768px)": {
      left: theme.spacing(2),
    },
  },
  tooltipStyle: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.secondary.main
        : theme.palette.primary.main,
  },
}));

export const LogoLink = () => {
  const classes = useStyles();

  return (
    <Tooltip
      title={Resume.basics.name}
      placement="right"
      TransitionComponent={Zoom}
      classes={{ tooltip: classes.tooltipStyle }}
    >
      <Link
        variant="h6"
        href={Resume.basics.url}
        underline="none"
        color="inherit"
        noWrap
        className={classes.svg}
      >
        <Logo />
      </Link>
    </Tooltip>
  );
};
