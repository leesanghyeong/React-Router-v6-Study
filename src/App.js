import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
 return (
   <div>
     <h2>Home</h2>
   </div>
 );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Users() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
}