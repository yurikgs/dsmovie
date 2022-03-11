import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbrar from "components/Navbrar";


function App() {
  return (
    <BrowserRouter>
      <Navbrar />
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
