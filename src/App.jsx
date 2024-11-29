import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Blog from './Components/Blog';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/add-blog" style={styles.link}>
            Add Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
