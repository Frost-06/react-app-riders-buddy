import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

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

export default function ServiceTabPage() {
  const loc = useLocation();
  const { serviceDescription } = loc.state;
  const { serviceSpec } = loc.state;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
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
          Service Details
        </Typography>
        <Typography variant="label">
          {serviceDescription.description}
        </Typography>

        <Typography
          variant="h1"
          style={{
            fontWeight: "bold",
            marginBottom: "32px",
            marginTop: "32px",
          }}
        >
          Service Expectations
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
            {serviceSpec.service1}
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
            {serviceSpec.service2}
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
            {serviceSpec.service3}
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
            {serviceSpec.service4}
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
            {serviceSpec.service5}
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
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
