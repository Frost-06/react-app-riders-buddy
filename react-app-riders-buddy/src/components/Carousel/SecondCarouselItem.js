import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductItem from "../ProductItem";

function SecondCarouselItems(props) {
  return (
    <Box
      width="100%"
      spacing={4}
      style={{
        padding: "10px 0px 10px 1px",
      }}
    >
      <Grid container columns={4} spacing={2}>
        {require("../../whatsNew.json").map((whatsNew, index) => (
          <Grid key={index} item xs={1}>
            <ProductItem {...whatsNew} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SecondCarouselItems;
