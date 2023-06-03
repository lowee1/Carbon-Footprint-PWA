import { useEffect, useState } from "react";
import {
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Missions from "./Missions";
import EditIcon from "@mui/icons-material/Edit";
import "./Home.css";

function HomePage() {
  const [userName, setUserName] = useState(localStorage.getItem("userName"));
  const [stats, setStats] = useState({
    missionsCompleted: localStorage.getItem("missionsCompleted") || 0,
    carbonSaved: localStorage.getItem("carbonSaved") || 0,
  });
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log("Setting userName to " + userName);
    localStorage.setItem("userName", userName);
    setOpen(false);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    if (!userName) {
      setOpen(true);
    }
  }, [userName]);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <h1 id="carbon-butler-header">Carbon</h1>
        <img src="https://butlerasia.com/wp-content/uploads/2022/12/ButlerLogo.png" alt="Butler Logo" style={{ marginLeft: "10px", maxHeight: "50px" }} />
      </Box>
      <Box display="flex" flexDirection="column">
        {userName && (
          <Paper className="widget-box">
            <Grid container spacing={2} flexDirection="column">
              <Grid xs={12} container alignItems="center" justifyContent="center">
                <Box display="flex" alignItems="center">
                  <Avatar alt="Profile Picture" src="https://i.pravatar.cc/150?img=7" style={{ margin: "10px" , height: "6rem", width: "4rem"}} />
                  <h2 style={{ marginRight: "10px", fontSize: "2rem" }}>Hello {userName}</h2>
                  <IconButton onClick={() => setOpen(true)}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </Grid>
              <Grid xs={12} container justifyContent="center">
                {/* Add content for the widget box here */}
                <Box>
                  <p>Missions completed: {stats.missionsCompleted}</p>
                  <p>Carbon saved: {stats.carbonSaved} kg</p>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Paper className="widget-box">
              <Box>
                {/* Add content for the widget box here */}
                <Missions />
              </Box>
            </Paper>
          </Grid>
          <Grid xs={12}>
            {/* Add content for the scrolling page here */}
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enter Your Name</DialogTitle>
          <DialogContent>
            <TextField label="Name" value={userName} onChange={handleNameChange} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default HomePage;