import HomeSection from "./components/HomeSection";
import LogoNav from "./components/LogoNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventForm from "./components/EventForm";
import EventDetails from "./components/EventDetails";

function App() {
  return (
    <>
      <LogoNav />
      <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/create-challenge" element={<EventForm />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
