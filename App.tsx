import React from 'react';

// The LogoIcon SVG component has been removed.

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-emerald-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-400/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            {/* Adding the logo image */}
            <img
              src="artifacts/logo.jpg"
              alt="Al Hidayah Labs Logo"
              className="mb-6 h-24 w-24 md:h-28 md:w-28 rounded-full object-cover"
            />
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-emerald-800">
            AL HIDAYAH
          </h1>
          <p className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider text-emerald-700">
            LABS
          </p>
          
          <p className="mt-6 text-lg md:text-xl text-emerald-700 font-medium">
            Building open-source AI for Muslims
          </p>
          
          <div className="mt-12">
            <span className="inline-block bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-8 py-3 text-2xl md:text-3xl font-light text-emerald-800 tracking-wider shadow-lg">
              Coming Soon
            </span>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-5 left-0 right-0 z-10 text-center text-emerald-600 text-sm">
        &copy; {new Date().getFullYear()} Al Hidayah Labs. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
