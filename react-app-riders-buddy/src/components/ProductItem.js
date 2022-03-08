import { useTheme } from "@emotion/react";
import { Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { StarIcon } from "../mui/CustomIcons";
import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ChatContainer from "../components/Chat/ChatContainer";
import useChat from "../hooks/useChat";

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
  const { chatDrawer, setChatDrawer } = useChat();
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
                style={{ padding: "5px 9px", marginLeft: "-16px" }}
              >
                {salePrice * 100}% off
              </Box>
            )
          }
          action={
            // check if category type product or service
            categoryType === "product" && (
              <img
                src={"/img/product-category-label-icon.png"}
                style={{ marginTop: "-12px" }}
                alt=""
              />
            )
          }
          title=""
          subheader=""
        />
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt=""
            style={{ marginTop: "10px" }}
          />
        </motion.div>
        <CardContent>
          <Typography
            variant="h2"
            style={{
              fontSize: 20,
              padding: "0px 0px 8px 0px",
            }}
          >
            {name && name.slice(0, 45) + "..."}
          </Typography>
          {rating && (
            <Box
              variant="body2"
              style={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={rating.stars}
                precision={0.5}
                readOnly
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              &nbsp;&nbsp;
              <span>({rating.count})</span>
            </Box>
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
