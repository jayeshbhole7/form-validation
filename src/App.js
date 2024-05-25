import './App.css';
import FormComp from './components/form';
// import FormData from './components/fromData';
import DataToDisplay from './fromData';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComp />} />
        <Route path="/data" element={<DataToDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;

