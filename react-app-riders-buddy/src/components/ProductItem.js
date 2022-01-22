import { useTheme } from "@emotion/react";
import { Button, Grid} from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductItem(props) {
  // const static, let
  let {
    name,
    price,
    salePrice,
    endingPrice,
    image,
    rating,
    productDescription,
    serviceDescription,
    categoryLabelIcon = "/img/product-category-label-icon.png",
    categoryType,
    productSpec,
    serviceSpec,
    categoryLabelIcon1,
  } = props;
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();


  // check if category type product or service
  categoryType === "product"
    ? (categoryLabelIcon1 = categoryLabelIcon)
    : (categoryLabelIcon1 = "/img/product-category-label-icon-hide.png");

  return (
    <Link to={"/" + categoryType} state={props}>
      <Card sx={{ maxWidth: 356 }}>
        <CardHeader
          avatar={
            salePrice && (
              <Box
                bgcolor={theme.palette.primary.main}
                color="#ffffff"
                width={100}
                style={{ padding: "5px 9px" }}
              >
                {salePrice * 100}% off
              </Box>
            )
          }
          action={categoryLabelIcon1 && <img src={categoryLabelIcon1} />}
          title=""
          subheader=""
        />
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <CardMedia component="img" height="194" image={image} alt="" />
        </motion.div>
        <CardContent>
          <Typography
            variant="h2"
            style={{
              fontSize: 20,
              padding: "0px 0px 8px 0px",
            }}
          >
            {name && name.slice(0, 40) + "..."}
          </Typography>
          {rating && (
            <Typography variant="body2" color="text.secondary">
              {new Array(rating.stars).fill(0).map((s, i) => (
                <React.Fragment key={i}>⭐</React.Fragment>
              ))}
              &nbsp;&nbsp;
              <span>({rating.count})</span>
            </Typography>
          )}
          <Grid
            container
            columns={2}
            alignItems="center"
            style={{ marginTop: "20px" }}
          >
            <Grid xs={1}>
              <span variant="label">Starting at</span>
              <Typography
                style={{
                  color: "#1AA3E9",
                  fontSize: 28,
                  fontWeight: 700,
                }}
              >
                ₱ {price}
              </Typography>
            </Grid>
            <Grid xs={1}>
              <Button variant="contained">Get Price</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
}
