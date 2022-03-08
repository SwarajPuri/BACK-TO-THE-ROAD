import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LadakhCity from "./Ladakh1.js";
import TravelLadakh from "./TravelLadakh.js";
import HotelLadakh from "./HotelLadakh.js";
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h1>.......</h1>
      <Paper position="static">
        <div className="centered-tabs">
          
        <Tabs pullRight value={value} onChange={handleChange}>
          <Tab label="Location" {...a11yProps(0)} />
          <Tab label="Hotels" {...a11yProps(1)} />
          <Tab label="Travel" {...a11yProps(2)} />
        </Tabs>
        </div>
      </Paper>
      <TabPanel value={value} index={0}>
        <LadakhCity/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HotelLadakh/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TravelLadakh/>
      </TabPanel>
    </div>
  );
}