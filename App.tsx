import React from 'react';

const LogoIcon = () => (
    <svg
      width="120"
      height="120"
      viewBox="0 0 107 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mb-6 h-24 w-24 md:h-28 md:w-28"
      aria-label="Al Hidayah Labs Logo"
      role="img"
    >
        <defs>
            <linearGradient id="logo-gradient" x1="53.5" y1="0" x2="53.5" y2="96.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#065f46"/>
                <stop offset="1" stopColor="#10b981"/>
            </linearGradient>
        </defs>
        <path d="M53.5 13.9211C55.6039 13.9211 57.3045 12.8693 58.1772 11.2316C59.7029 8.28341 57.5195 4.75789 54.2105 3.94737C50.9016 3.13684 47.5329 4.63158 45.8684 7.57895C45.2763 8.63158 45.1368 9.96316 45.5789 11.2316C46.4516 12.8693 48.1521 13.9211 50.2558 13.9211H53.5Z" fill="url(#logo-gradient)"/>
        <path d="M62.6316 6.18421L60.5263 9.44737L57.3684 7.57895L59.4737 4.31579L62.6316 6.18421Z" fill="url(#logo-gradient)"/>
        <path d="M53.5 13.9211V22.1053" stroke="url(#logo-gradient)" strokeWidth="8.42105" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M86.8421 28.2895C86.8421 28.2895 70.2811 41.5693 70.2811 51.0526C70.2811 60.536 86.8421 73.8158 86.8421 73.8158" stroke="url(#logo-gradient)" strokeWidth="8.42105" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.1579 28.2895C20.1579 28.2895 36.7189 41.5693 36.7189 51.0526C36.7189 60.536 20.1579 73.8158 20.1579 73.8158" stroke="url(#logo-gradient)" strokeWidth="8.42105" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36.7189 51.0526V67.6579" stroke="url(#logo-gradient)" strokeWidth="8.42105" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M31.2895 62.3158C31.2895 65.3195 28.8247 67.7842 25.8211 67.7842C22.8174 67.7842 20.3526 65.3195 20.3526 62.3158C20.3526 59.3121 22.8174 56.8474 25.8211 56.8474C28.8247 56.8474 31.2895 59.3121 31.2895 62.3158Z" fill="url(#logo-gradient)"/>
        <path d="M86.6474 62.3158C86.6474 65.3195 84.1826 67.7842 81.1789 67.7842C78.1753 67.7842 75.7105 65.3195 75.7105 62.3158C75.7105 59.3121 78.1753 56.8474 81.1789 56.8474C84.1826 56.8474 86.6474 59.3121 86.6474 62.3158Z" fill="url(#logo-gradient)"/>
        <path d="M53.5 73.8158V42.6316C53.5 42.6316 57.7105 38.3947 62.9474 38.3947" stroke="url(#logo-gradient)" strokeWidth="8.42105" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M68.3789 43.7632C68.3789 46.7668 65.9142 49.2316 62.9105 49.2316C59.9068 49.2316 57.4421 46.7668 57.4421 43.7632C57.4421 40.7595 59.9068 38.2947 62.9105 38.2947C65.9142 38.2947 68.3789 40.7595 68.3789 43.7632Z" fill="url(#logo-gradient)"/>
        <path d="M96.5 83.1316H10.5C7.46243 83.1316 5 80.6691 5 77.6316V75.5263C5 72.4887 7.46243 70 10.5 70H96.5C99.5376 70 102 72.4887 102 75.5263V77.6316C102 80.6691 99.5376 83.1316 96.5 83.1316Z" fill="url(#logo-gradient)"/>
    </svg>
);


const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-emerald-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-emerald-400/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-teal-400/20 rounded-full filter blur-3xl" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center">
            <LogoIcon />
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
