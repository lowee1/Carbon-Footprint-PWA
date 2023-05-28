import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Forest">Forest</Link>
          </li>
          <li>
            <Link to="/Statistics">Statistics</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
      <Link to="/Forest">Forest</Link>
      <Link to="/Statistics">Statistics</Link>
    </>
  );
}

function ForestPage() {
  return (
    <>
      <h1>Forest</h1>
      <Link to="/">Home page</Link>
      <Link to="/Statistics">Statistics</Link>
    </>
  );
}

function StatisticsPage() {
  return (
    <>
      <h1>Statistics</h1>
      <Link to="/">Home page</Link>
      <Link to="/Forest">Forest</Link>
    </>
  );
}

export default App;
