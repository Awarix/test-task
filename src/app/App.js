import Dashboard from '../pages/dashboard/Dashboard';
import Experiment from '../pages/experiment/Experiment';
import ExperimentList from '../pages/experimentList/ExperimentList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import SlideMenu from '../components/slideMenu/SlideMenu';

function App() {
  return (
    <div>
      <BrowserRouter>
      <SlideMenu />
      <Routes>
        <Route exact path="/" element={<Dashboard />}/>
        <Route path="/exp-list" element={<ExperimentList />}/>
        <Route path="/experiment" element={<Experiment />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
