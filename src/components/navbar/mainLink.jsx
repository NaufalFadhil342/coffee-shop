import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BlogLink, MenuLink, PagesLink, ReservationLink, ShopLink } from './subLink';

const links = [
    { to: '/pages', name: 'Pages', Component: PagesLink },
    { to: '/blog', name: 'Blog', Component: BlogLink },
    { to: '/menu', name: 'Menu', Component: MenuLink },
    { to: '/shop', name: 'Shop', Component: ShopLink },
    { to: '/reservation', name: 'Reservation', Component: ReservationLink },
];

const MainLink = ({ isScrolled }) => {
    const [hoverState, setHoverState] = useState({});
    const navigate = useNavigate();

    const handleMainLink = (e, hasSubLinks) => {
        if (hasSubLinks) {
            e.preventDefault();
        }
    };

    const handleLinkClick = (path) => {
        window.scrollTo(0, 0);
        navigate(path);
    }

    const handleMouseEnter = (name) => setHoverState({ ...hoverState, [name]: true });
    const handleMouseLeave = (name) => setHoverState({ ...hoverState, [name]: false });

    return (
        <nav className="main-link w-full h-full hidden lg:flex lg:items-center lg:gap-5">
            <NavLink to='/' className={`home-link ${isScrolled ? 'text-stone-800' : 'text-white'} ${({ isActive }) => (isActive ? 'active' : '')}`}>
                <>Home</>
                <div className="underline" />
            </NavLink>
            {links.map(({ to, name, Component }) => (
                <NavLink key={name} to={to} onClick={(e) => handleMainLink(e, true)} className={({ isActive }) => (isActive ? 'active' : 'relative')} onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={() => handleMouseLeave(name)}>
                    <span className={isScrolled ? 'text-stone-800' : 'text-white'}>{name}</span>
                    <div className="main-underline" />
                    <Component isActive={hoverState[name]} setMouseLeave={handleMouseLeave} name={name} handleSublink={handleMainLink} handleLinkClick={handleLinkClick} />
                </NavLink>
            ))}
        </nav>
    );
};

export { MainLink };
