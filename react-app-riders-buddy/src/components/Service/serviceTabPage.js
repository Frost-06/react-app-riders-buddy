import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
          Service Details
        </Typography>
        <Typography variant="label">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor
          venenatis massa id molestie. Suspendisse in efficitur sapien, ut
          egestas eros. Phasellus quis neque eget neque congue suscipit at
          commodo leo. Cras a eros nibh. Praesent vulputate purus quis nibh
          ullamcorper mattis. Etiam aliquam blandit arcu vel dignissim. Ut a
          consequat turpis, in condimentum diam. Donec ex purus, imperdiet et
          semper sed, mattis sed urna. Sed eget malesuada tellus. Ut sagittis
          enim eget justo euismod, id volutpat enim tincidunt. Maecenas ut nibh
          et eros blandit tincidunt at eu nisi. Curabitur ac aliquam massa, sed
          semper elit. Donec erat lorem, mollis at neque eget, sagittis euismod
          augue. Aenean rhoncus, lorem in eleifend efficitur, lectus lectus
          sagittis magna, sit amet pharetra massa felis sed erat. Maecenas ante
          libero, ullamcorper sed egestas nec, cursus sit amet sem. Ut sapien
          neque, vehicula tempor odio at, tristique euismod tortor. Ut metus
          erat, consectetur sit amet elit ac, tempus ultrices velit. Sed aliquam
          molestie ipsum a molestie. Aenean rutrum commodo nisl, a ornare nisl
          volutpat at. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Proin vulputate tempus lacus
          et ultricies. Vestibulum sed lectus vitae dui imperdiet pharetra vel
          eu nisi. Phasellus sit amet dolor sed lectus eleifend tristique.
          Aenean at porta purus. Etiam et diam sodales, hendrerit nulla ut,
          suscipit purus. Duis finibus diam vitae aliquet commodo. Cras at
          sodales sem, ac tristique nisl. Morbi malesuada odio non nisi volutpat
          fermentum. Integer cursus ipsum at nunc molestie egestas. Fusce
          sagittis consectetur pretium. Praesent eget sem in ipsum sollicitudin
          aliquam. Etiam convallis fermentum turpis, quis mattis ex luctus a.
          Sed eleifend velit arcu, convallis sodales enim ultrices elementum.
          Proin iaculis quam eget dolor pellentesque, sit amet cursus lacus
          sollicitudin. Aenean non aliquam elit, ac rutrum lacus. Morbi id
          volutpat massa. Nulla dignissim elit ut ex bibendum, et gravida dui
          gravida. Curabitur congue porta sem, at sodales elit vehicula at.
          Aliquam ac augue nulla.
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
