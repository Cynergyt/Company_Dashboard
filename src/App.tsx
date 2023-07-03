
import Dashboard from './Components/Dashboard'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    
    </Routes>
  </BrowserRouter>
  );
};

export default App;