import { Routes, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import Reviews from './screens/Reviews';

// import ReviewsDropdown from './ReviewsDropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/reviews'>
          <button>Reviews</button>
        </Link>
        <Link to='/about'>
          <button>About</button>
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      
      <div>
        {/* <ReviewsDropdown /> */}
      </div>
    </div>
  );
}

export default App;
