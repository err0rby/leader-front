import SignIn from './components/SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import Event from './pages/Event/Event';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
   
   <Routes>
        <Route path='/signin' element={ <SignIn/>} />
        <Route path='/signup' element={ <SignUp/>} />
        <Route path='/events' element={<Event />} />
      </Routes>
      <Header /> 
    </div>
  );
}

export default App;
