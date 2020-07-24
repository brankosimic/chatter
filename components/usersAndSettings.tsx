import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import chatStyles from "../styles/chat.module.scss";
import UserList from "./userList";
import Settings from "./settings";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
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
        <div>
          <Typography component={"span"}>{children}</Typography>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function UsersAndSettings() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={chatStyles.chattabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="Settings" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <UserList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Settings />
      </TabPanel>
    </div>
  );
}
