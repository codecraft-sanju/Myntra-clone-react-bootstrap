import { IoMdPerson } from 'react-icons/io';
import { IoBag } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <div className="nav_item">
          <a href="#">Men</a>
          <div className="dropdown">
            <a href="#">T-Shirts</a>
            <a href="#">Jeans</a>
            <a href="#">Shoes</a>
          </div>
        </div>
        <div className="nav_item">
          <a href="#">Women</a>
          <div className="dropdown">
            <a href="#">Dresses</a>
            <a href="#">Tops</a>
            <a href="#">Footwear</a>
          </div>
        </div>
        <div className="nav_item">
          <a href="#">Kids</a>
          <div className="dropdown">
            <a href="#">Clothing</a>
            <a href="#">Toys</a>
            <a href="#">Accessories</a>
          </div>
        </div>
        <div className="nav_item">
          <a href="#">Home & Living</a>
          <div className="dropdown">
            <a href="#">Furniture</a>
            <a href="#">Decor</a>
            <a href="#">Kitchen</a>
          </div>
        </div>
        <div className="nav_item">
          <a href="#">Beauty</a>
          <div className="dropdown">
            <a href="#">Makeup</a>
            <a href="#">Skincare</a>
            <a href="#">Fragrances</a>
          </div>
        </div>
        <div className="nav_item">
          <a href="#">
            Studio <sup>New</sup>
          </a>
          <div className="dropdown">
            <a href="#">Videos</a>
            <a href="#">Inspiration</a>
            <a href="#">Trends</a>
          </div>
        </div>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <a className="action_container" href="./signup/signin.html">
          <span className="action_icon material-symbols-outlined">
            <IoMdPerson />
          </span>
          <span className="action_name">Profile</span>
        </a>
        <a className="action_container" href="pages/wishlist.html">
          <span className="action_icon material-symbols-outlined">
              <FaHeart />
            </span>
          <span className="action_name">Wishlist</span>
          <span className="bag-wishlist-count">0</span>
        </a>
        <Link className="action_container" to="/bag">
          <span className="action_icon material-symbols-outlined">
            <IoBag />
          </span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">0</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
