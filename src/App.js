import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/:id" element={<Child />} />
        </Routes>
      </div>
    </Router>

  );
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}