'use client';

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCategory from './AddCategory';
import AddRecord from './AddRecord';
import AddBill from './AddBill';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Tab label="Seznam účtů" {...a11yProps(0)} />
          <Tab label="Přidat položky" {...a11yProps(1)} />
          <Tab label="Přidat kategorie" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AddBill />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddRecord apiUrl={'product'} btnText={'Add product'} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddRecord apiUrl={'category'} btnText={'Add category'} />
      </CustomTabPanel>
    </Box>
  );
}
