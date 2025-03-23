
import './App.css'
import Nav from './components/Nav'
import FeedbackForm from './components/Feedback'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
     <Router>
      <Nav />  {/* Navigation bar */}
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={ <FeedbackForm/>} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
    
    </>
  )
}

export default App
