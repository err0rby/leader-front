import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event/Event';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/events' element={<Event />} />
      </Routes>
    </div>
  );
}

export default App;
