import { Grid, Paper } from "@mui/material";
import Missions from "./Missions";
import "./Home.css"

function Home() {
  const user = {
    name: "John",
    greeting: "Hello",
  };

  const stats = {
    missionsCompleted: 10,
    carbonSaved: 100,
  };

  return (
    <div>
      <h1>Carbon Butler</h1>
      <div>
        <div>
          <h2>{user.greeting} {user.name}</h2>
          <div>
            <p>Missions completed: {stats.missionsCompleted}</p>
            <p>Carbon saved: {stats.carbonSaved} kg</p>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper className="widget-box">
              <div style={{ height: "200px" }}>
                {/* Add content for the widget box here */}
                <Missions />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            {/* Add content for the scrolling page here */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;