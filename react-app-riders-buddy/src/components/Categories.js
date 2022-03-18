import { useTheme } from "@emotion/react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories(props) {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container spacing={4} sx={{ flexWrap: isMd ? "wrap !important" : "nowrap !important"}}>
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
