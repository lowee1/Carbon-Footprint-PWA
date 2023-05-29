import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalculator,
  faTree,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="/Calculator">
              <FontAwesomeIcon icon={faCalculator} />
            </Link>
          </li>
          <li>
            <Link to="/Forest">
              <FontAwesomeIcon icon={faTree} />
            </Link>
          </li>
          <li>
            <Link to="/Statistics">
              <FontAwesomeIcon icon={faChartLine} />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
        <Route path="/Forest" element={<ForestPage />} />
        <Route path="/Statistics" element={<StatisticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
      <h1>Home page</h1>
    </>
  );
}

function ForestPage() {
  return (
    <>
      <h1>Forest</h1>
    </>
  );
}

function StatisticsPage() {
  return (
    <>
      <h1>Statistics</h1>
    </>
  );
}

function CalculatorPage() {
  return (
    <>
      <h1>Calculator</h1>
    </>
  );
}

export default App;
