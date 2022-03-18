import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import axios from "axios";

function CarouselItems(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const [bestSellers, setProducts] = useState();

  useEffect(() => {
    axios.get("api/bestseller").then((resp) => {
      if (resp.data) {
        setProducts(resp.data);
      }
    });
  }, []);
  return (
    <Box
      width="100%"
      spacing={5}
      style={{
        padding: "10px 0px 30px 10px",
      }}
    >
      {bestSellers && (
      <Grid container columns={isMd ? 2 : 4} spacing={2}>
        {bestSellers.map((bestSeller, index) => (
          <Grid key={index} item xs={1}>
            <ProductItem {...bestSeller} />
          </Grid>
        ))}
      </Grid>
      )}
      {!bestSellers && <i>Loading products...</i>}
    </Box>
  );
}

export default CarouselItems;
