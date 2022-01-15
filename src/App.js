import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProdcut from './UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/add" element={<AddProduct/>}/>
          <Route path="/update" element={<UpdateProdcut/>}/>
         
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/update">
            <UpdateProdcut />
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
