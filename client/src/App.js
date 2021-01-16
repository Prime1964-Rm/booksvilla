import logo from './logo.svg';
import './App.css';
import HomePage from './view/pages/homepage/HomePage';
import RoundNavButton from './components/roundNavButton/RoundNavButton';
import NavBar from './components/NavBar/NavBar.component';
import Footer from './components/Footer/Footer';
import Test from './BookPage'
import BookPage from './BookPage';

function App() {
  return (
    <div className="App" >
      <NavBar className="header" />
      
      <HomePage />
      <Footer />
      {/* <Test/> */}
      {/* <BookPage/> */}
    </div>
  );
}

export default App;
