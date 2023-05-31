import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ForestIcon from '@mui/icons-material/Forest';
import HomeIcon from "@mui/icons-material/Home";
import CalculateIcon from "@mui/icons-material/Calculate";

import HomePage from "./pages/Home";
import CalculatorPage from "./pages/Calculator";
import ForestPage from "./pages/Forest";
import StatisticsPage from "./pages/Statistics";
import MissionsPage from "./pages/Missions";

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/forest" element={<ForestPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/missions" element={<MissionsPage />} />
        </Routes>
        <BottomNavigation showLabels className="bottom-nav">
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            component={Link}
            to="/"
          />
          <BottomNavigationAction
            label="Calculator"
            icon={<CalculateIcon />}
            component={Link}
            to="/calculator"
          />
          <BottomNavigationAction
            label="Forest"
            icon={<ForestIcon />}
            component={Link}
            to="/forest"
            />
        </BottomNavigation>
      </BrowserRouter>
    </div>
  );
}

export default App;
