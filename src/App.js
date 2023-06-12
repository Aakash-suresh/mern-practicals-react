import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomeComponent from './components/homeComponent/homeComponent';
import ContactComponent from './components/contactComponent/contactComponent';
import AboutusComponent from './components/aboutusComponent/aboutusComponent';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Link to="/">Home</Link><br/>
          <Link to="/contactus">Contact Us</Link><br/>
          <Link to="/aboutus">About Us</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<HomeComponent />} />
          <Route path="/contactus" element={<ContactComponent />} />
          <Route path="/aboutus" element={<AboutusComponent />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
