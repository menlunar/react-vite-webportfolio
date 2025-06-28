// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Blog from './Blog';
import HomePage from './HomePage'; // Your existing content


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}



// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© 2025 Menric G. Lunar. All rights reserved.</p>
//     </footer>
//   );
// };

export default App
