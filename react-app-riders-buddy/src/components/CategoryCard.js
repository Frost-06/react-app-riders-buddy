import { useMediaQuery, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";

function CategoryCard({ image, isActive, title, description }) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      className={["category-card", isActive ? "active" : ""].join(" ")}
      sx={{
        marginRight: isMd ? "" : "16px !important",
        marginBottom: isMd ? "16px !important" : "",
      }}
    >
      <Typography variant={isMd ? "h3" : "h2"}>{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      {image && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={image} className="category-image" alt="" width={isMd ? "164" : ""}/>
      )}
    </Grid>
  );
}

export default CategoryCard;
