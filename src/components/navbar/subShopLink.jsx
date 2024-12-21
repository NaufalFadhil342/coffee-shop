import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ShopLayout = (props) => {
  return (
    <AnimatePresence>
      {props.shopActive && (
        <motion.div
          className="min-w-full h-auto absolute top-0 left-[15rem] z-[2]"
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
          <nav className="shop-layout w-full h-full py-6 px-6 flex flex-col items-start gap-4 cursor-default">
            <NavLink to="/shop/shop-layout/left-side-shop" onClick={() => props.handleLinkClick('/shop/shop-layout/left-side-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Shop - Left Side</>
              <div className="underline-layout" />
            </NavLink>
            <NavLink to="/shop/shop-layout/right-side-shop" onClick={() => props.handleLinkClick('/shop/shop-layout/right-side-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Shop - Right Side </>
              <div className="underline-layout" />
            </NavLink>
            <NavLink to="/shop/shop-layout/grid-shop" onClick={() => props.handleLinkClick('/shop/shop-layout/grid-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Shop - Grid</>
              <div className="underline-layout" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ShopPages = (props) => {
  return (
    <AnimatePresence>
      {props.shopActive && (
        <motion.div
          className="min-w-max h-auto absolute top-0 left-[15rem] z-[2]"
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
          <nav className="shop-page w-full h-full py-6 px-6 flex flex-col items-start gap-4 cursor-default">
            <NavLink to="/shop/shop-page/my-account" className={({ isActive }) => (isActive ? 'active' : '')}>
              <>My Account</>
              <div className="underline-page" />
            </NavLink>
            <NavLink to="/shop/shop-page/cart" className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Cart</>
              <div className="underline-page" />
            </NavLink>
            <NavLink to="/shop/shop-page/checkout" className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Checkout</>
              <div className="underline-page" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProductsLayout = (props) => {
  return (
    <AnimatePresence>
      {props.shopActive && (
        <motion.div
          className="min-w-max h-auto absolute top-0 left-[15rem] z-[2]"
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
          <nav className="product-layout w-full h-full py-6 px-6 flex flex-col items-start gap-4 cursor-default">
            <NavLink to="/shop/product-layout/singleProduct" className={({ isActive }) => (isActive ? 'active' : '')}>
              <>Product - Single Product</>
              <div className="underline-product" />
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ShopLayout, ShopPages, ProductsLayout };
