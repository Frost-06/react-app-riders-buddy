import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "-35%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Ratings and Reviews" {...a11yProps(1)} />
          <Tab label="Questions and Answers" {...a11yProps(2)} />
          <Tab label="Shop Details" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography
          variant="h1"
          style={{ fontWeight: "bold", marginBottom: "32px" }}
        >
          Product Details
        </Typography>
        <Typography variant="label">
          Easy to install chain joints for the magic buckle easy to disassemble
          easy to clean reusable Strong Rally special forging steel repeated
          forging strict control of materials to ensure the strength Smooth
          lubrication surface polishing internal oiling Accurate matching
          professional equipment test spacing professional and technical test
          data Durable rust and corrosion
        </Typography>

        <Typography
          variant="h1"
          style={{
            fontWeight: "bold",
            marginBottom: "32px",
            marginTop: "32px",
          }}
        >
          Specifications
        </Typography>
        <Box style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography
            variant="label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img src="/img/checkbox.png" />
            100% brand new and high quality
          </Typography>
          <Typography
            variant="label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img src="/img/checkbox.png" />
            Made of high-quality materials, durable and practical
          </Typography>
          <Typography
            variant="label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img src="/img/checkbox.png" />
            Type: Single speed positive and negative plate (circular disc)
          </Typography>
          <Typography
            variant="label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img src="/img/checkbox.png" />
            Material: 7075-T6 Aviation Aluminum Alloy
          </Typography>
          <Typography
            variant="label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "22px",
            }}
          >
            <img src="/img/checkbox.png" />
            Weight: 34T: 4kg (Approx)
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} style={{ display: "inline-flex" }}>
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            style={{ color: "#1AA3E9", fontWeight: "bold" }}
          >
            5
          </Typography>
          <Typography>1k customer reviews</Typography>
        </Container>
        <Container style={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={20} />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}
