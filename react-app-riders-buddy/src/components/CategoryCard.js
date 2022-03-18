import { Box, Container, Typography } from "@mui/material";
import React from "react";

function CategoryCard({ image, isActive, title, description }) {
  return (
    
    <Container className={["category-card", isActive ? "active" : ""].join(" ")} style={{}}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      {image && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img src={image} className="category-image"/>
      )}
    </Container>
  );
}

export default CategoryCard;
