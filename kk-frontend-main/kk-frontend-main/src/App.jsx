import React, { useContext, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ShopContext } from './context/ShopContext';
import EmailCapturePopup from './components/EmailCapturePopup';

// Pages
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import BedBuilder from './pages/BedBuilder'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Verify from './pages/Verify'
import ColorTherapy from './pages/ColorTherapy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import TrackOrder from './pages/TrackOrder'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import LoadingSpinner from './components/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isLoading } = useContext(ShopContext);
  const location = useLocation();
  const isFullWidth = location.pathname === '/' || location.pathname === '/bed-builder';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <LoadingSpinner isLoading={isLoading}>
        <ToastContainer />
        <Navbar />
        
        {/* Global Popup */}
        <EmailCapturePopup />
        
        <div className={`pt-16 min-h-[calc(100vh-200px)] ${isFullWidth ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'}`}>
          <SearchBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/bed-builder' element={<BedBuilder />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/color-therapy' element={<ColorTherapy />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogPost />} />
            <Route path='/track-order' element={<TrackOrder />} />
          </Routes>
        </div>
        <Footer />
      </LoadingSpinner>
    </div>
  )
}

export default App;