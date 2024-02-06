import React from "react";
import Link from "@mui/material/Link";
import ReactGA from "react-ga";

export const CustomLink = (props) => {
  const { children, title } = props;
  ReactGA.event({
    category: "Link",
    action: title || `${children}`
  });
  return <Link {...props} />;
};
