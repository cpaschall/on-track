import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './main/HomePage';
import WorkoutForm from './workout/WorkoutForm';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workouts" element={<WorkoutForm />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
