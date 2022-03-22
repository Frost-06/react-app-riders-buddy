import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import axios from "axios";

function ThirdCarouselItem(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const [similarProducts, setProducts] = useState();

  useEffect(() => {
    axios.get("api/similarproducts").then((resp) => {
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
      {similarProducts && (
      <Grid container columns={isMd ? 1 : 4} spacing={2}>
        {similarProducts.map((similarProduct, index) => (
          <Grid key={index} item xs={1}>
            <ProductItem {...similarProduct} />
          </Grid>
        ))}
      </Grid>
      )}
      {!similarProducts && <i>Loading products...</i>}
    </Box>
  );
}

export default ThirdCarouselItem;
