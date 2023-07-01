import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
//import Jumbotron from './components/Jumbotron';
import LibrairyView from './redux/features/librairy/LibrairyView';
import FetchBooksView from './redux/features/fetchBooks/FetchBooksView';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
           <Route path='/' element={<LibrairyView/>}/>
           <Route path='/search' element={<FetchBooksView/>}/>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
