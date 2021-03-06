import { useTheme } from "@emotion/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  CardActions,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
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

const StyledRating = styled(Rating)({
  "& .MuiRating-icon": {
    color: "#A0A3BD",
  },

  "& .MuiRating-iconFilled": {
    color: "#E61B00",
  },
  "& .MuiRating-iconHover": {
    color: "#E61B00",
  },
});

export default function ProductItem(props) {
  const { chatDrawer, setChatDrawer } = useChat();
  // const static, let
  let {
    id,
    item_name,
    price,
    salePrice,
    image,
    rating,
    categoryType,
    reviews,
  } = props;
  const [expanded, setExpanded] = React.useState(false);
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const { user, updateUser } = useContext(UserContext);

  return (
    <a href={"/" + categoryType + "/" + id}>
      <Card sx={{ maxWidth: 356, height: 408 }}>
        <Container sx={{ position: "absolute" }}>
          <CardHeader
            sx={{ position: "relative", zIndex: "1500" }}
            avatar={
              //sale price
              salePrice ? (
                <Box
                  bgcolor={theme.palette.primary.main}
                  color="#ffffff"
                  width={100}
                  style={{
                    padding: isMd ? "5px 18px " : "5px 9px",
                    marginLeft: "-40px",
                    zIndex: "0",
                    fontSize: "12",
                    fontWeight: "500",
                  }}
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
        {user.isLoggedIn ? (
          <div
            style={{
              textAlign: "right",
              width: "48px",
              height: "48px",
              position: "absolute",
              zIndex: "1500",
              backgroundColor: "#FCFCFC",
              boxShadow: "0px 24px 48px rgba(110, 113, 145, 0.2)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              marginLeft: "240px",
              marginTop: "-60px",
              border: "1px solid #D9DBE9",
            }}
          >
            <StyledRating
              name="customized-color"
              defaultValue={0}
              max={1}
              size="large"
              sx={{ margin: "0 auto" }}
              icon={<FavoriteIcon />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </div>
        ) : (
          ""
        )}

        <CardContent sx={{ paddingRight: "14px !important" }}>
          <Typography
            variant="h6"
            style={{
              padding: "0px 0px 8px 0px",
              maxWidth: "100%",
              textAlign: "left",
              textJustify: "inter-word",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item_name}
          </Typography>
          <Grid>
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
                  size="medium"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                &nbsp;&nbsp;
                <Typography variant="subtitle1" sx={{ color: "#6E7191" }}>
                  ({reviews})
                </Typography>
              </Box>
            )}

            <CardActions sx={{ padding: "0 !important" }}>
              <Grid //lower
                container
                columns={2}
                alignItems="center"
                style={{
                  display: "flex",
                  marginTop: "20px",
                  justifyContent: "space-between",
                }}
              >
                <Box xs={1}>
                  <Typography variant="body2">Starting at</Typography>
                  <Typography
                    variant="h4"
                    style={{
                      color: "#1AA3E9",
                      lineHeight: "25px !important",
                      fontWeight: 800,
                    }}
                  >
                    ??? {price}
                  </Typography>
                </Box>
                <Box xs={1}>
                  <Button variant="contained" size="small" alignItems="right">
                    Get Price
                  </Button>
                </Box>
              </Grid>
            </CardActions>
          </Grid>
        </CardContent>
      </Card>
    </a>
  );
}
