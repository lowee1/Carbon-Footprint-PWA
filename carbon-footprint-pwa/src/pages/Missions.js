import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Box, Collapse, Checkbox } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function Mission({ name, description }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <Checkbox checked={checked} onChange={handleCheck} />
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Typography variant="body1" style={{ marginLeft: "20px" }}>{description}</Typography>
      </Collapse>
      <Divider />
    </>
  );
}

function MissionsPage() {
  const missions = [
    {
      name: 'Reduce heating & cooling usage',
      description: 'Set thermostat 2 degrees higher in summer and 2 degrees lower in winter. Check for drafts and seal windows/doors with weatherstripping. Clean or replace furnace/AC filters monthly.'
    },
    {
      name: 'Reduce meat consumption',
      description: 'Have at least 2 meat-free days per week. Replace 50% of meat with plant-based proteins like beans, tofu, or lentils on other days. Choose chicken, turkey, eggs instead of beef and pork when possible.'
    },
    {
      name: 'Drive more efficiently',
      description: ' Accelerate slowly and avoid excessive speeds. Anticipate stops to avoid unnecessary braking. Combine trips and remove unnecessary weight from vehicle.'
    }
  ];

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #f5f5dc, #e6ffe6)' }}>
      <Typography variant="h6" align="center">Missions</Typography>
      <Divider />
      <List>
        {missions.map((mission, index) => (
          <Mission key={index} name={mission.name} description={mission.description} />
        ))}
      </List>
    </Box>
  );
}

export default MissionsPage;