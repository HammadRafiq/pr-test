import './App.css';
import Test from './components/Test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
