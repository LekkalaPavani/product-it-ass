import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Dashboard from './components/Dashboard/index';
import CreateAssessment from './components/CreateAssessment/index';
import AccessManagement from './components/AccessManagement/index';
import NewAssessmentPage from './components/NewAssessmentPage/index';

import './App.css';

const App=()=>{
  return (
    <div className='App-header'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createassessment" element={<CreateAssessment />} />
        <Route path="/accessmanagement" element={<AccessManagement />} />
        <Route path="/newassessment" element={<NewAssessmentPage />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;


