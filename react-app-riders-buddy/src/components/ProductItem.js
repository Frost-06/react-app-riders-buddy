import { useTheme } from "@emotion/react";
import { Button, Container, Grid, LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { StarIcon } from "../theme/CustomIcons";
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
    item_name,
    price,
    salePrice,
    endingPrice,
    image,
    rating,
    productDescription,
    serviceDescription,
    categoryType,
    productSpec,
    serviceSpec,
    reviews,
    categoryLabelIcon1,
  } = props;
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  return (
    <Link to={"/" + categoryType} state={props}>
      <Card sx={{ maxWidth: 356 }}>
        <Container
        sx={{position: "absolute"}}
        >
        <CardHeader
          sx={{ position: "relative", zIndex: "1500"}}
          avatar={
            //sale price
            salePrice ? (
              <Box
                bgcolor={theme.palette.primary.main}
                color="#ffffff"
                width={100}
                style={{ padding: "5px 9px", marginLeft: "-40px", zIndex: "0" }}
              >
                {salePrice * 100}% off
              </Box>
            ) : (
              ""
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
        />
        </Container>
        <motion.div
          whileHover={{
            scale: 1.1,
          }}
        >
          <CardMedia component="img" height="194" image={image} alt="" />
        </motion.div>
        <CardContent>
          <Typography
            variant="h5"
            style={{
              fontSize: 20,
              padding: "0px 0px 8px 0px",
            }}
          >
            {item_name && item_name.slice(0, 40) + "..."}
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
                defaultValue={parseFloat(rating)}
                precision={0.5}
                readOnly
                size="small"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              &nbsp;&nbsp;
              <span>({reviews})</span>
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
