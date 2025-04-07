const Hero = () => {
  return (
    <section className="py-12 md:py-16 text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-spartan relative">
        Test My Apps,<br />
        Shape <span className="relative inline-block">
          Your
          <svg 
            className="absolute w-full h-3 left-0 -bottom-1" 
            viewBox="0 0 100 15" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,3 C20,15 40,-5 60,8 C75,15 90,5 100,3" 
              fill="none" 
              stroke="#9333ea" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="path-animation"
            />
          </svg>
        </span> Future.
      </h1>
    </section>
  );
};

export default Hero;
