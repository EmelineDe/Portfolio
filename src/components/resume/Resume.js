import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import { TextDecrypt } from "../content/TextDecrypt";
import ResumePDF from "./../../assets/Emeline_Delobel_Resume.pdf";
import { ResumeIcon } from "../content/ResumeButton";

const useStyles = makeStyles((theme) => ({
  footerText: {
    "@media (max-width: 1024px)": {
      position: "absolute",
      left: "1rem",
      bottom: "0.6rem",
    },
    position: "fixed",
    bottom: theme.spacing(1.125),
    left: theme.spacing(6),
    "&:hover": {
      color:
        theme.palette.type === "dark"
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },

    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color="inherit"
      underline="none"
      href={`${ResumePDF}`}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.footerText}
    >
      <ResumeIcon />
      <Typography
        component="span"
        style={{
          paddingLeft: "0.3rem",
          paddingTop: "0.2rem",
        }}
      >
        <TextDecrypt text={" Mon CV"} />
      </Typography>
    </Link>
  );
};
