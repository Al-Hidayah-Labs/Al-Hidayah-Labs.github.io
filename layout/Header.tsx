import React, { useState } from 'react';
import { LogoIconTransBG } from '../components/icons/LogoIcon';
import { MenuIcon } from '../components/icons/MenuIcon';
import { XIcon } from '../components/icons/XIcon';
import { pages } from '../constants/navigation';

interface HeaderProps {
    navigate: (page: string) => void;
    currentPage: string;
    navLinks: string[];
}

export const Header: React.FC<HeaderProps> = ({ navigate, currentPage, navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const NavLink = ({ page }: { page: string }) => (
        <a href={`#${pages[page].slug}`}
            onClick={(e) => { e.preventDefault(); navigate(page); setIsMenuOpen(false); }}
            className={`block md:inline-block px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === page ? 'text-emerald-700 font-bold' : 'text-emerald-600 hover:text-emerald-800'}`}>
            {page}
        </a>
    );

    return (
        <header className="sticky top-0 z-50 bg-emerald-50/80 backdrop-blur-lg border-b border-emerald-200/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" onClick={(e) => { e.preventDefault(); navigate('Home'); }} className="flex items-center gap-2">
                            <LogoIconTransBG className="h-8 w-8" />
                            <span className="font-bold text-xl text-emerald-800 font-heading">Al Hidayah Labs</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => <NavLink key={link} page={link} />)}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-emerald-600 hover:text-emerald-800 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => <NavLink key={link} page={link} />)}
                    </div>
                </div>
            )}
        </header>
    );
};