import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center px-4 sm:px-12 py-6 sm:py-10">
      {/* Navigation */}
      <nav className="flex justify-between items-center w-full max-w-6xl mb-8 sm:mb-16">
        <div className="flex items-center gap-2">
          {/* Logo mark */}
          <div className="w-7 h-7 sm:w-8 sm:h-8">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect width="32" height="32" rx="8" fill="#f97316" />
              <path
                d="M8 11 L16 21 L24 11"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11 L16 17 L20 11"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>

          {/* Wordmark */}
          <p
            className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.03em" }}
          >
            Vox
            <span className="text-orange-500" style={{ fontStyle: "italic" }}>
              ify
            </span>
          </p>
        </div>

        {/* Tagline — pulse dot on mobile, full pill on sm+ */}
        <span className="flex sm:hidden w-7 h-7 items-center justify-center rounded-full bg-gray-100">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          AI Article Summarizer
        </span>
      </nav>

      {/* Hero Content */}
      <div className="max-w-4xl text-center px-2">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Summarize Articles with <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            OpenAI GPT-4
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Transform long, complex articles into clear, concise summaries in
          seconds. Built for students, researchers, and professionals who value
          speed, clarity, and productivity.
        </p>
      </div>
    </header>
  );
};

export default Hero;
