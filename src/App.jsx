import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Books from "./Books.json";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Card from "./Components/Card"; // Import the Card component
import Footer from "./Components/Footer";
import Type from "./Components/Category/Type";
import Signup from "./Components/Login/register/Signup";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Components/About Us/About";
import Contact from "./Components/Contact Us/Contact";
import Sell from "./Components/Seller/Sell";
import Error from "./Components/Error";
import Cart from "./Components/Cart/Cart";
import ProductDetail from "./Components/ProductDetail"; // Import the ProductDetail component
import Logout from "./Components/Login/register/Logout";
import Profile from "./Components/Login/register/Profile";
import Balance from "./Components/Balance/Balance";
import Need_to_signIn from "./Components/Login/register/Need_to_signIn";

// Helper function to filter books by category
const getBooksByCategory = (category) => {
  return Books.filter(
    (book) => book.category.toLowerCase() === category.toLowerCase()
  );
};

const CategoryPage = ({ category }) => {
  const books = getBooksByCategory(category);

  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const showNavbarAndFooter = !location.pathname.includes("/register");

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Signup />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/category" element={<Type />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/about/contact" element={<Contact />} />
        <Route exact path="/seller" element={<Sell />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/balance" element={<Balance />} />
        <Route exact path="/need" element={<Need_to_signIn />} />
        <Route exact path="*" element={<Error />} />
        <Route
          exact
          path="/category/romance"
          element={<CategoryPage category="Romance" />}
        />
        <Route
          exact
          path="/category/comedy"
          element={<CategoryPage category="Comedy" />}
        />
        <Route
          exact
          path="/category/horror"
          element={<CategoryPage category="Horror" />}
        />
        <Route
          exact
          path="/category/fantasy"
          element={<CategoryPage category="Fantasy" />}
        />
        <Route
          exact
          path="/category/sci-fi"
          element={<CategoryPage category="Sci-fi" />}
        />
        <Route
          exact
          path="/category/travel"
          element={<CategoryPage category="Travel" />}
        />
        <Route
          exact
          path="/category/history"
          element={<CategoryPage category="History" />}
        />
        <Route
          exact
          path="/category/anime"
          element={<CategoryPage category="Anime" />}
        />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </>
  );
};

export default App;
