import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ShopLayout = ({ activeShoplink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const shopLayoutHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeShoplink && (
                <motion.div
                    className="w-full h-auto bg-secondary overflow-y-hidden flex flex-col py-2"
                    initial={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    animate={{
                        height: '100%',
                        visibility: 'visible'
                    }}
                    exit={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="mobile-shop-layout w-fit h-auto py-6 px-6 flex flex-col items-start gap-4 cursor-default">
                        <NavLink to="/shop/shop-layout/left-side-shop" onClick={() => shopLayoutHandler('/shop/shop-layout/left-side-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Shop - Left Side</>
                            <div className="underline-layout" />
                        </NavLink>
                        <NavLink to="/shop/shop-layout/right-side-shop" onClick={() => shopLayoutHandler('/shop/shop-layout/right-side-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Shop - Right Side </>
                            <div className="underline-layout" />
                        </NavLink>
                        <NavLink to="/shop/shop-layout/grid-shop" onClick={() => shopLayoutHandler('/shop/shop-layout/grid-shop')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Shop - Grid</>
                            <div className="underline-layout" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ShopPages = ({ activeShoplink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const shopPagesHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeShoplink && (
                <motion.div
                    className="w-full h-auto bg-secondary overflow-y-hidden flex flex-col py-2"
                    initial={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    animate={{
                        height: '100%',
                        visibility: 'visible'
                    }}
                    exit={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="mobile-shop-page w-fit h-auto py-6 px-6 flex flex-col items-start gap-4 cursor-default">
                        <NavLink to="/shop/shop-page/my-account" onClick={() => shopPagesHandler('/shop/shop-page/my-account')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>My Account</>
                            <div className="underline-page" />
                        </NavLink>
                        <NavLink to="/shop/shop-page/cart" onClick={() => shopPagesHandler('/shop/shop-page/cart')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Cart</>
                            <div className="underline-page" />
                        </NavLink>
                        <NavLink to="/shop/shop-page/checkout" onClick={() => shopPagesHandler('/shop/shop-page/checkout')} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Checkout</>
                            <div className="underline-page" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ProductsLayout = ({ activeShoplink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const productsLayoutHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null)
    }

    return (
        <AnimatePresence>
            {activeShoplink && (
                <motion.div
                    className="w-full h-auto bg-secondary overflow-y-hidden flex flex-col py-2"
                    initial={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    animate={{
                        height: '100%',
                        visibility: 'visible'
                    }}
                    exit={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <nav className="mobile-product-layout w-fit h-auto py-6 px-6 flex flex-col items-start gap-4 cursor-default">
                        <NavLink to="/shop/product-layout/singleProduct" onClick={() => productsLayoutHandler('/shop/product-layout/singleProduct')} className={({ isActive }) => (isActive ? 'active' : '')}>
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
