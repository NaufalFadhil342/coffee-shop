import React, { Fragment, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { PagesLink, BlogLink, MenuLink, ReservationLink, ShopLink } from './mobileSublink';

const links = [
    { name: 'Pages', Component: PagesLink },
    { name: 'Blog', Component: BlogLink },
    { name: 'Menu', Component: MenuLink },
    { name: 'Shop', Component: ShopLink },
    { name: 'Reservation', Component: ReservationLink },
];

const MobileNavlink = ({ showMobileLink, setShowMobileLink }) => {
    const [activeSublink, setActiveSublink] = useState(null)
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    };

    const mobileSublinkHandler = (linkName) => {
        setActiveSublink(prev => prev === linkName ? null : linkName)
    };

    const homeLinkHandler = (to) => {
        handleLinkClick(to);
        setShowMobileLink(false);
    }

    return (
        <Fragment>
            {showMobileLink && <section className="w-full h-screen py-6 px-8 block bg-secondary absolute top-0 left-0 z-50 lg:hidden">
                <nav className='w-full h-full flex flex-col gap-4 items-center justify-center'>
                    <NavLink to='/' onClick={() => homeLinkHandler('/')} className={`home-link text-stone-800 font-medium ${({ isActive }) => (isActive ? 'active' : '')}`}>
                        <>Home</>
                        <div className="underline" />
                    </NavLink>
                    {links.map(({ name, Component }) => (
                        <div className='w-full h-auto' key={name}>
                            <span className='w-full h-10 flex justify-center items-center text-stone-600 font-medium' onClick={() => mobileSublinkHandler(name)}>{name}</span>
                            <Component activeSublink={activeSublink === name} setShowMobileLink={setShowMobileLink} setActiveSublink={setActiveSublink} handleLinkClick={handleLinkClick} />
                        </div>
                    ))}
                </nav>
            </section>}
        </Fragment>
    )
}

export { MobileNavlink };