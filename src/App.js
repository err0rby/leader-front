import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event/Event';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/events' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
