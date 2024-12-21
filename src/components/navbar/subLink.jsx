import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { ProductsLayout, ShopLayout, ShopPages } from './subShopLink';

// const HomeLink = (props) => {
//   return (
//     <AnimatePresence>
//       {props.isActive && (
//         <motion.div
//           className="min-w-max h-auto absolute top-14 z-[2]"
//           onMouseLeave={() => props.setMouseLeave(props.name)}
//           initial={{
//             opacity: 0,
//           }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 0.25 },
//           }}
//           exit={{
//             opacity: 0,
//             transition: { delay: 0.5 },
//           }}
//           transition={{ duration: 0.5 }}
//         >
//           <nav className="home-link w-full h-full py-6 px-6 flex flex-col items-start gap-4">
//             <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
//               <>Home 1</>
//               <div className="underline" />
//             </NavLink>
//             <NavLink to="/home2" className={({ isActive }) => (isActive ? 'active' : '')}>
//               <>Home 2</>
//               <div className="underline" />
//             </NavLink>
//             <NavLink to="/home3" className={({ isActive }) => (isActive ? 'active' : '')}>
//               <>Home 3</>
//               <div className="underline" />
//             </NavLink>
//           </nav>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

const PagesLink = (props) => {
  return (
    <AnimatePresence>
      {props.isActive && (
        <motion.div
          className="min-w-max h-auto absolute top-14 z-[2]"
          onMouseLeave={() => props.setMouseLeave(props.name)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <nav className="page-link w-full h-full py-6 px-6 flex flex-col items-start gap-4">
            <NavLink to="/pages/about" onClick={() => props.handleLinkClick("/pages/about")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>About Us</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/pages/services" onClick={() => props.handleLinkClick("/pages/services")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Our Service</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/pages/team" onClick={() => props.handleLinkClick("/pages/team")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Our Team</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/pages/process" onClick={() => props.handleLinkClick("/pages/process")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Our Process</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/pages/gallery" onClick={() => props.handleLinkClick("/pages/gallery")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Our Gallery</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/pages/contact" onClick={() => props.handleLinkClick("/pages/contact")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Contact Us</>
              <div className="underline" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BlogLink = (props) => {
  return (
    <AnimatePresence>
      {props.isActive && (
        <motion.div
          className="min-w-max h-auto absolute top-14 z-[2]"
          onMouseLeave={() => props.setMouseLeave(props.name)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <nav className="blog-link w-full h-full py-6 px-6 flex flex-col items-start gap-4">
            <NavLink to="/blog/blog-rightbar" onClick={() => props.handleLinkClick("/blog/blog-rightbar")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Blog - Right Sidebar</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/blog/blog-leftbar" onClick={() => props.handleLinkClick("/blog/blog-leftbar")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Blog - Left Sidebar</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/blog/full-width" onClick={() => props.handleLinkClick("/blog/full-width")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Blog - Full Width</>
              <div className="underline" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const MenuLink = (props) => {
  return (
    <AnimatePresence>
      {props.isActive && (
        <motion.div
          className="min-w-max h-auto absolute top-14 z-[2]"
          onMouseLeave={() => props.setMouseLeave(props.name)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <nav className="menu-link w-full h-full py-6 px-6 flex flex-col items-start gap-4">
            <NavLink to="/menu/our-menu" onClick={() => props.handleLinkClick("/menu/our-menu")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Menu - Our Menu</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/menu/simple-menu" onClick={() => props.handleLinkClick("/menu/simple-menu")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Menu - Simple Menu</>
              <div className="underline" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ReservationLink = (props) => {
  return (
    <AnimatePresence>
      {props.isActive && (
        <motion.div
          className="min-w-max h-auto absolute top-14 z-[2]"
          onMouseLeave={() => props.setMouseLeave(props.name)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <nav className="reservation-link w-full h-full py-6 px-6 flex flex-col items-start gap-4">
            <NavLink to="/reservation/book-table" onClick={() => props.handleLinkClick("/reservation/book-table")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Reservation - Book Table</>
              <div className="underline" />
            </NavLink>
            <NavLink to="/reservation/reservation-form" onClick={() => props.handleLinkClick("/reservation/reservation-form")} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Reservation - Reservation Form</>
              <div className="underline" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ShopLink = (props) => {
  const shopLinks = [
    { to: '/shop/shop-layout', name: 'Shop Layout', Component: ShopLayout },
    { to: '/shop/product-layout', name: 'Product Layout', Component: ProductsLayout },
    { to: '/shop/shop-page', name: 'Shop Page', Component: ShopPages },
  ];
  const [shopState, setShopState] = useState({});

  const handleShopEnter = (name) => setShopState({ ...shopState, [name]: true });
  const handleShopLeave = (name) => setShopState({ ...shopState, [name]: false });

  return (
    <AnimatePresence>
      {props.isActive && (
        <motion.div
          className="w-[15rem] h-auto absolute top-14 z-[2]"
          onMouseLeave={() => props.setMouseLeave(props.name)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <nav className="shop-link w-full h-full py-6 px-6 flex flex-col items-start gap-4 cursor-default">
            {shopLinks.map(({ to, name, Component }) => (
              <NavLink key={name} to={to} onClick={(e) => props.handleSublink(e, true)} className={({ isActive }) => (isActive ? 'active' : '')} onMouseEnter={() => handleShopEnter(name)} onMouseLeave={() => handleShopLeave(name)}>
                <div className="w-fit flex flex-col gap-2 items-start">
                  <div className="translate-y-1">{name}</div>
                  <div className="underline" />
                  <Component shopActive={shopState[name]} handleLinkClick={props.handleLinkClick} setMouseLeave={handleShopLeave} name={name} />
                </div>
                <div className="text-lg text-[#3f3f3f]">
                  <IoIosArrowForward />
                </div>
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { PagesLink, BlogLink, MenuLink, ReservationLink, ShopLink };
