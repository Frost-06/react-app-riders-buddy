import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import axios from "axios";

function SecondCarouselItems(props) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const [newItems, setProducts] = useState();

  useEffect(() => {
    axios.get("api/newitems").then((resp) => {
      if (resp.data) {
        setProducts(resp.data);
      }
    });
  }, []);

  return (
    <Box
      width="100%"
      spacing={4}
      style={{
        padding: "10px 0px 30px 1px",
      }}
    >
      {newItems && (
      <Grid container columns={isMd ? 2 : 4} spacing={2}>
        {newItems.map((items, index) => (
          <Grid key={index} item xs={1}>
            <ProductItem {...items} />
          </Grid>
        ))}
      </Grid>
      )}
      {!newItems && <i>Loading products...</i>}
    </Box>
  );
}

export default SecondCarouselItems;
