import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ListCustomers from './customers/ListCustomers';
import ViewCustomer from './singleCustomer/ViewCustomer';
import TransferRequest from './transfer/TransferRequest';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<ListCustomers />}></Route>
          <Route path='show/:id' element={<ViewCustomer />}></Route>
          <Route path='show/:id_one/transfer/:id_two' element={<TransferRequest />}></Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
