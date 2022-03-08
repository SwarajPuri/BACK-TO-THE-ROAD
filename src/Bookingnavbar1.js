import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Hotel from "./bookingconfirmation2.js";
import Travel from "./Bookingconfirmation.js";

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
        <Box p={2}>
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
          <Tab label="YOUR HOTEL BOOKINGS" {...a11yProps(0)} />
          <Tab label="YOUR TRAVEL BOOKINGS" {...a11yProps(1)} />
         
        </Tabs>
        </div>
      </Paper>
      <TabPanel value={value} index={0}>
        <Hotel/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Travel/>
      </TabPanel>
    
    </div>
  );
}
