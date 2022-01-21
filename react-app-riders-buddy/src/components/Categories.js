import { Container, Grid } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories(props) {
  return (
    <Grid container spacing={2}>
      {[
        {
          title: "BICYCLE",
          description:
            "A lot of variations to choose from like, seats, tail lights, folding, wheels, and many more!",
          image: "/img/bicycle.png",
        },
        {
          title: "MOTORCYCLE",
          description:
            "Affordable and reliable parts and accessories like muffer, tail lights, wheels and many more!",
          image: "/img/motorcycle.png",
        },
        {
          title: "SHOPS",
          description:
            "On the go mechanics, at your doorsteps or anywhere you are. Choose the best that suit your needs.",
          image: "/img/shops.png",
        },
      ].map(({ title, description, image }) => (
        <Grid item key={title}>
          <CategoryCard title={title} description={description} image={image} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Categories;
