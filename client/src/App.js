import logo from './logo.svg';
import './App.css';
import HomePage from './view/pages/homepage/HomePage';
import RoundNavButton from './components/roundNavButton/RoundNavButton';
import Routes from './routes/Routes'
import Test from './BookPage'
import BookPage from './BookPage';
import Login from './view/pages/Login/Login';
import TestPage from './TestPage'
import ProductPage from './view/pages/productPage/ProductPage';
import ProfilePage from './view/pages/profile-page/ProfilePage';
import BSToast from './components/toast/Toast';

function App() {
  const ProductDetail = {
    bookName:"book-cover",
    imageList:[
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'},
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'},
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'},
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'},
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'},
      {img:'https://images-na.ssl-images-amazon.com/images/I/61ZKNw0xixL.jpg'}
    ],
    rating:5,
    title:"Some Title",
    Author:"Some Author",
    Price:"10$"
  }
  return (
    <div className="App" >
     <Routes/>
      {/* <ProfilePage/> */}
      {/* <BSToast/> */}
    </div>
  );
}

export default App;
