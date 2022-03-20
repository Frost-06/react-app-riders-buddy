import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function CategoryCard({ image, isActive, title, description }) {
  return (
    
    <Grid className={["category-card", isActive ? "active" : ""].join(" ")} spacing={4}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      {image && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={image} className="category-image"/>
      )}
    </Grid>
  );
}

export default CategoryCard;
