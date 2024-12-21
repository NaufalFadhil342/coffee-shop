import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Loading } from './utilities/loading';

const Home = lazy(() => import('./pages/home/home'));
const About = lazy(() => import('./pages/page/about'));
const OurServices = lazy(() => import('./pages/page/ourServices'));
const ContactUs = lazy(() => import('./pages/page/contactUs'));
const OurTeam = lazy(() => import('./pages/page/ourTeam'));
const OurGallery = lazy(() => import('./pages/page/OurGallery'));
const OurProcess = lazy(() => import('./pages/page/OurProcess'));
const BlogRightBar = lazy(() => import('./pages/blog/blogRightBar'));
const BlogLeftBar = lazy(() => import('./pages/blog/blogLeftBar'));
const BlogFullWidth = lazy(() => import('./pages/blog/blogFullwidth'));
const BlogParams = lazy(() => import('./pages/blog/blogParams'));
const OurMenu = lazy(() => import('./pages/menu/ourMenu'));
const SimpleMenu = lazy(() => import('./pages/menu/simpleMenu'));
const Reservation = lazy(() => import('./pages/reservation/reservation'));
const OpenTable = lazy(() => import('./pages/reservation/openTable'));
const LeftSideBar = lazy(() => import('./pages/shop/sideBar/leftSideBar'));
const RightSideBar = lazy(() => import('./pages/shop/sideBar/rightSideBar'));
const GridShop = lazy(() => import('./pages/shop/grid/gridShop'));
const SingleProduct = lazy(() => import('./pages/product/singleProduct'));
const MyAccount = lazy(() => import('./pages/shop/account/myAccount'));
const MyCart = lazy(() => import('./pages/shop/cart/myCart'));
const MyCheckout = lazy(() => import('./pages/shop/checkout/myCheckout'));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition > documentHeight * 0.08) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section>
      <Navbar isScrolled={isScrolled} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/services" element={<OurServices />} />
          <Route path="/pages/team" element={<OurTeam />} />
          <Route path="/pages/contact" element={<ContactUs />} />
          <Route path="/pages/gallery" element={<OurGallery />} />
          <Route path="/pages/process" element={<OurProcess />} />
          <Route path="/blog/blog-rightbar" element={<BlogRightBar />} />
          <Route path="/blog/blog-leftbar" element={<BlogLeftBar />} />
          <Route path="/blog/full-width" element={<BlogFullWidth />} />
          <Route path="/blog/:title" element={<BlogParams />} />
          <Route path="/menu/our-menu" element={<OurMenu />} />
          <Route path="/menu/simple-menu" element={<SimpleMenu />} />
          <Route path="/shop/shop-layout/left-side-shop" element={<LeftSideBar />} />
          <Route path="/shop/shop-layout/right-side-shop" element={<RightSideBar />} />
          <Route path="/shop/shop-layout/grid-shop" element={<GridShop />} />
          <Route path="/shop/product-layout/singleProduct" element={<SingleProduct />} />
          <Route path="/shop/shop-page/my-account" element={<MyAccount />} />
          <Route path="/shop/shop-page/cart" element={<MyCart />} />
          <Route path="/shop/shop-page/checkout" element={<MyCheckout />} />
          <Route path="/reservation/book-table" element={<OpenTable />} />
          <Route path="/reservation/reservation-form" element={<Reservation />} />
        </Routes>
        <Footer />
      </Suspense>
    </section>
  );
}

export default App;
