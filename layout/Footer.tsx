import React from 'react';
import { LogoIconWhiteBG } from '../components/icons/LogoIcon';
import { pages } from '../constants/navigation';

interface FooterProps {
    navigate: (page: string) => void;
    navLinks: string[];
    footerLinks: string[];
}

export const Footer: React.FC<FooterProps> = ({ navigate, navLinks, footerLinks }) => (
    <footer className="bg-emerald-700 text-emerald-100">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 md:col-span-4 lg:col-span-1">
                    <div className="flex items-center gap-3">
                         <LogoIconWhiteBG className="h-10 w-10" />
                        <div>
                             <p className="font-bold text-xl text-white font-heading">AL HIDAYAH</p>
                             <p className="font-semibold text-lg text-white font-heading">LABS</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-emerald-300">Building open-source AI for Muslims.</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">Navigate</h3>
                    <ul className="mt-4 space-y-2">
                        {navLinks.slice(1,5).map(link => (
                            <li key={link}><a href={`#${pages[link].slug}`} onClick={(e) => { e.preventDefault(); navigate(link); }} className="text-base text-emerald-300 hover:text-white">{link}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">Connect</h3>
                     <ul className="mt-4 space-y-2">
                        {navLinks.slice(5).map(link => (
                             <li key={link}><a href={`#${pages[link].slug}`} onClick={(e) => { e.preventDefault(); navigate(link); }} className="text-base text-emerald-300 hover:text-white">{link}</a></li>
                        ))}
                    </ul>
                </div>
                 <div className="col-span-2 md:col-span-2">
                    <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-200">Utility</h3>
                    <ul className="mt-4 space-y-2 md:column-count-2">
                        {footerLinks.map(link => (
                            <li key={link}><a href={`#${pages[link].slug}`} onClick={(e) => { e.preventDefault(); navigate(link); }} className="text-base text-emerald-300 hover:text-white">{link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-emerald-700 pt-8 text-center text-sm text-emerald-400">
                &copy; {new Date().getFullYear()} Al Hidayah Labs. All rights reserved.
            </div>
        </div>
    </footer>
);