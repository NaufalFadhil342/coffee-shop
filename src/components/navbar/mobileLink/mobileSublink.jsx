import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowForward } from 'react-icons/io';
import { ProductsLayout, ShopLayout, ShopPages } from './mobileSubShoplink';

const PagesLink = ({ activeSublink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const pagesLinkHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeSublink && (
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
                    transition={{ duration: 0.5 }}
                >
                    <nav className="mobile-page-link w-full h-auto py-6 px-6 flex flex-col items-center gap-4">
                        <NavLink to="/pages/about" onClick={() => pagesLinkHandler("/pages/about")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>About Us</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/pages/services" onClick={() => pagesLinkHandler("/pages/services")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Our Service</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/pages/team" onClick={() => pagesLinkHandler("/pages/team")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Our Team</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/pages/process" onClick={() => pagesLinkHandler("/pages/process")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Our Process</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/pages/gallery" onClick={() => pagesLinkHandler("/pages/gallery")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Our Gallery</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/pages/contact" onClick={() => pagesLinkHandler("/pages/contact")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Contact Us</>
                            <div className="underline" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const BlogLink = ({ activeSublink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const blogLinkHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeSublink && (
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
                    transition={{ duration: 0.5 }}
                >
                    <nav className="mobile-blog-link w-full h-auto py-6 px-6 flex flex-col items-center gap-4">
                        <NavLink to="/blog/blog-rightbar" onClick={() => blogLinkHandler("/blog/blog-rightbar")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Blog - Right Sidebar</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/blog/blog-leftbar" onClick={() => blogLinkHandler("/blog/blog-leftbar")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Blog - Left Sidebar</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/blog/full-width" onClick={() => blogLinkHandler("/blog/full-width")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Blog - Full Width</>
                            <div className="underline" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const MenuLink = ({ activeSublink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const menuLinkHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeSublink && (
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
                    transition={{ duration: 0.5 }}
                >
                    <nav className="mobile-menu-link w-full h-auto py-6 px-6 flex flex-col items-center gap-4">
                        <NavLink to="/menu/our-menu" onClick={() => menuLinkHandler("/menu/our-menu")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Menu - Our Menu</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/menu/simple-menu" onClick={() => menuLinkHandler("/menu/simple-menu")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Menu - Simple Menu</>
                            <div className="underline" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ReservationLink = ({ activeSublink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const menuLinkHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
        setActiveSublink(null);
    }

    return (
        <AnimatePresence>
            {activeSublink && (
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
                    transition={{ duration: 0.5 }}
                >
                    <nav className="mobile-reservation-link w-full h-auto py-6 px-6 flex flex-col items-center gap-4">
                        <NavLink to="/reservation/book-table" onClick={() => menuLinkHandler("/reservation/book-table")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Reservation - Book Table</>
                            <div className="underline" />
                        </NavLink>
                        <NavLink to="/reservation/reservation-form" onClick={() => menuLinkHandler("/reservation/reservation-form")} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <>Reservation - Reservation Form</>
                            <div className="underline" />
                        </NavLink>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const ShopLink = ({ activeSublink, setShowMobileLink, handleLinkClick, setActiveSublink }) => {
    const shopLinks = [
        { to: '/shop/shop-layout', name: 'Shop Layout', Component: ShopLayout },
        { to: '/shop/product-layout', name: 'Product Layout', Component: ProductsLayout },
        { to: '/shop/shop-page', name: 'Shop Page', Component: ShopPages },
    ];
    const [activeShoplink, setActiveShoplink] = useState(null)

    const mobileShoplinkHandler = (linkName) => {
        setActiveShoplink(prev => prev === linkName ? null : linkName);
    }

    return (
        <AnimatePresence>
            {activeSublink && (
                <motion.div
                    className="w-full h-auto bg-secondary overflow-y-hidden flex flex-col py-2"
                    initial={{
                        height: '0',
                        visibility: 'hidden',
                    }}
                    animate={{
                        height: '100%',
                        visibility: 'visible'
                    }}
                    exit={{
                        height: '0',
                        visibility: 'hidden'
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <nav className='mobile-shop-link w-full h-auto flex flex-col items-center'>
                        {shopLinks.map(({ name, Component }) => (
                            <div className='w-full h-auto' key={name}>
                                <span className='w-full h-10 flex justify-between items-center text-stone-600 font-medium' onClick={() => mobileShoplinkHandler(name)}>{name} <><IoIosArrowForward /></></span>
                                <Component activeShoplink={activeShoplink === name} setShowMobileLink={setShowMobileLink} setActiveSublink={setActiveSublink} handleLinkClick={handleLinkClick} />
                            </div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export { PagesLink, BlogLink, MenuLink, ReservationLink, ShopLink };
