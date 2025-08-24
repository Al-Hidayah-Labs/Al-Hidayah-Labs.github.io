
import React, { useState, useEffect } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { HomePage } from './pages/HomePage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { pages, slugToPageMap, navLinks, footerLinks } from './constants/navigation';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            const pageTitle = slugToPageMap[hash] || 'Home';
            setCurrentPage(pageTitle);
            window.scrollTo(0, 0);
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Set initial page

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const navigate = (page: string) => {
        const pageDetails = pages[page];
        if (pageDetails) {
            window.location.hash = pageDetails.slug;
        }
    };

    const renderPage = () => {
        const pageDetails = pages[currentPage];
        if (!pageDetails) {
            return <HomePage navigate={navigate} />;
        }
        
        if (pageDetails.slug === 'home') {
            return <HomePage navigate={navigate} />;
        } else {
            return <PlaceholderPage title={pageDetails.title} description={pageDetails.description} />;
        }
    };

    return (
        <div className="relative min-h-screen w-full bg-emerald-50 text-emerald-900 overflow-x-hidden">
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-400/20 rounded-full filter blur-3xl opacity-50" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl opacity-50" aria-hidden="true" />
            
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header navigate={navigate} currentPage={currentPage} navLinks={navLinks} />
                <main className="flex-grow">
                    {renderPage()}
                </main>
                <Footer navigate={navigate} navLinks={navLinks} footerLinks={footerLinks} />
            </div>
        </div>
    );
};

export default App;
