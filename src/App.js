import Auth from './components/Authoriz/Auth';
import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event/Event';

function App() {
  return (
    <div className="App">
    <Auth/>
      <Routes>
        <Route path='/events' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
