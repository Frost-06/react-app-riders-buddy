import { Box, Typography } from "@mui/material";
import React from "react";

function CategoryCard({ image, isActive, title, description }) {
  return (
    <Box className={["category-card", isActive ? "active" : ""].join(" ")}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      {image && <img src={image} className="category-image" />}
    </Box>
  );
}

export default CategoryCard;
