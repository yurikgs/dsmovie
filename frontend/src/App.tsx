import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing/>}></Route>
        <Route path="/form">
           <Route path=":movieId" element={<Form/>} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      

  )
}


export default App;
