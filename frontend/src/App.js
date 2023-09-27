import logo from './logo.svg';
import Home from './routes/Home';
import Admin from './routes/Admin';
import EditUser from './routes/EditUser';
import AddUser from './routes/AddUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {




  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edituser/:userid' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
