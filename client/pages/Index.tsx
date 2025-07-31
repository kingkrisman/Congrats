import { useEffect, useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);
  const [galleryInterval, setGalleryInterval] = useState<NodeJS.Timeout | null>(null);
  const [scrollImageIndex, setScrollImageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const ordinationImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F263fd4a8fa394212a5108b1a72e7b56e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fbb6e2c21cdb94916b9f6c55cbb4e5b78?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F6852d88a060c4755a95a63f8bbafef80?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F26b4938cf1ec497d8fafaafafdcc682a?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F83ed3c26efdb41a1be330dc4f4f78b41?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F73ef989db23f496bb3bbaed6c8f97003?format=webp&width=800"
  ];

  const galleryImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fa334645c90b34065a4d6527297b16f60?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F200d6c318c56435db76ffa626ab43631?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F52e7c78ebab24a59a48899f48afc2b21?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F7b362d95de664cd6958133da2d5ba4ed?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fc33c965e93784e94ab9f9b862324cadb?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fd3e11e77b802430590645129c99f2ede?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F1448211797804a729f99b3ec043cfa6b?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F7e35cea894ae4d8690259723cc436c3e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F1f29ee12cb4245f5bcc36fb498551ecf?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F5287834e6c17412aac63e4845e0f98e8?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fe106378ca9554bc5b576b6f5f5fd951d?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F949ec174d41d47e5b4831b1f4dce52db?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fc933edcc726f4e65920a3b5e2f144cdb?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F0892de093a444c28b752c543ce6830d3?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fd41d079e4def4ce7a06756f8a8ebff48?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fb131dba85bde4f2987145430be7dee48?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F3be169a37ef74de8ae795ca820bc9682?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F9adff922446f4008af5b33c1f8432d26?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F0e3c1386efae4ebb836f90d0bbbefe0d?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F97fcc01bee3c43b48dadc84dc0adf031?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Ffd1a103d7df4424694ce219a59274d01?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Ffc096ad2bc7f4b46979f2283a15202ab?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F10fd279e6e094e0e8ad266c9b8781a54?format=webp&width=800"
  ];

  const scrollSectionImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F18efd0ba79b74b059d24cba958d868ae?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F7e44696106d74fe6ab226edbb909d8f7?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fe1cf2a3aea5c4b63a75e8f8df544f8fb?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fc346b2722850442aabff6407f3c4b022?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F4dc3263f548d44aeacaaccd968786c2e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fc1abd56de3a74b20a326738f3a82c520?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fb10644981b554937b9bad329b4c05e4c?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F52e7d470194448b0a2e78e480ef2a679?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fbcb26b4233ef41528539644c4ac0d042?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F1c3cc1a730c945f2b8077c8dfad8c8d5?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F715c5dec48e34113aa1efd5c387dc7a2?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F3a81a88de9eb4a238260332503f7e906?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F59122a3253b14ffda22fa41e3e9874a5?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fd771d0c3042c4cccbf15dadda97eec05?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fd226b5d7fd6146e09bd40932bfb50014?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Ff582c648ed9145f0b1670a7ad90d6e8e?format=webp&width=800"
  ];

  useEffect(() => {
    setIsVisible(true);

    // Trigger confetti celebration on page load
    setShowConfetti(true);
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000); // Show confetti for 4 seconds

    // Set up image rotation every 2 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % ordinationImages.length
      );
    }, 2000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(confettiTimer);
    };
  }, [ordinationImages.length]);

  useEffect(() => {
    // Set up auto-scroll for gallery every 5 seconds
    const interval = setInterval(() => {
      setGalleryImageIndex((prevIndex) =>
        (prevIndex + 1) % galleryImages.length
      );
    }, 5000);

    setGalleryInterval(interval);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [galleryImages.length]);

  useEffect(() => {
    // Set up scroll listener for scroll section
    const handleScroll = () => {
      const scrollSection = document.getElementById('scroll-section');
      if (!scrollSection) return;

      const rect = scrollSection.getBoundingClientRect();
      const sectionHeight = scrollSection.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollStart = -rect.top;
      const scrollEnd = sectionHeight - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, scrollStart / scrollEnd));

      // Calculate which image to show based on scroll progress
      const imageIndex = Math.floor(scrollProgress * (scrollSectionImages.length - 1));
      setScrollImageIndex(Math.max(0, Math.min(scrollSectionImages.length - 1, imageIndex)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollSectionImages.length]);

  const resetGalleryInterval = () => {
    if (galleryInterval) {
      clearInterval(galleryInterval);
    }

    const newInterval = setInterval(() => {
      setGalleryImageIndex((prevIndex) =>
        (prevIndex + 1) % galleryImages.length
      );
    }, 5000);

    setGalleryInterval(newInterval);
  };

  const blessings = [
    "Victory on all sides, my ❤",
    "A ministry filled with light, love, and lasting impact",
    "A heart that continues to burn for God",
    "A life that inspires faith in others",
    "Favor in every season, grace in every step"
  ];

  const nextGalleryImage = () => {
    setGalleryImageIndex((prevIndex) =>
      (prevIndex + 1) % galleryImages.length
    );
    resetGalleryInterval();
  };

  const prevGalleryImage = () => {
    setGalleryImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    resetGalleryInterval();
  };

  const selectGalleryImage = (index: number) => {
    setGalleryImageIndex(index);
    resetGalleryInterval();
  };

  return (
    <div className="min-h-screen bg-ordination-white">
      {/* Confetti Celebration */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 animate-pulse ${
                i % 4 === 0 ? 'bg-ordination-gold' :
                i % 4 === 1 ? 'bg-red-500' :
                i % 4 === 2 ? 'bg-blue-500' : 'bg-green-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `confetti-fall ${3 + Math.random() * 2}s ease-out forwards`
              }}
            />
          ))}

          {/* Heart shapes for extra celebration */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={`heart-${i}`}
              className="absolute text-red-500 text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-50px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
                animation: `confetti-fall ${4 + Math.random() * 2}s ease-out forwards`
              }}
            >
              ❤️
            </div>
          ))}

          {/* Celebration emojis */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`emoji-${i}`}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-50px`,
                animationDelay: `${Math.random() * 2.5}s`,
                animationDuration: `${3.5 + Math.random() * 1.5}s`,
                animation: `confetti-fall ${3.5 + Math.random() * 1.5}s ease-out forwards`
              }}
            >
              {i % 3 === 0 ? '🎉' : i % 3 === 1 ? '✨' : '🙏'}
            </div>
          ))}
        </div>
      )}

      {/* Header Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Slideshow */}
        {ordinationImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        
        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-ordination-white mb-6 leading-tight">
            Congratulations on Your Ordination,
            <span className="block text-ordination-gold-light text-3xl md:text-5xl lg:text-6xl mt-2">
              My Crown!
            </span>
          </h1>
          <p className="font-script text-2xl md:text-4xl text-ordination-white mb-4">
            From Wifey, With Love ❤
          </p>
          <p className="font-body text-lg md:text-xl text-ordination-cream italic">
            "You are God's delight—and my pride."
          </p>
        </div>
      </div>

      {/* Main Message Section */}
      <section className="py-16 md:py-24 px-6 bg-ordination-white">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center md:text-left transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ordination-text-gold mb-8">
              A New Chapter Begins…
            </h2>
            
            <div className="font-body text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
              <p>
                Today is more than a celebration—it's a sacred moment.
              </p>
              
              <p>
                Your ordination is a divine stamp of approval on everything you've been becoming. A man of faith, discipline, compassion, and purpose. I've watched you grow with grace, and now the world gets to witness the fullness of what God is doing through you.
              </p>
              
              <p>
                I pray for more anointing, more spiritual depth, and more strength to carry the mantle God has placed upon you.
              </p>
              
              <p className="font-semibold">
                May your voice echo healing. May your hands bless multitudes. May your heart stay anchored in God's love—no matter the weight of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blessings & Declarations Section */}
      <section className="py-16 md:py-24 px-6 bg-ordination-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ordination-white mb-12">
            Blessings & Declarations
          </h2>
          
          <div className="space-y-6">
            {blessings.map((blessing, index) => (
              <div
                key={index}
                className={`transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
              >
                <p className="font-body text-xl md:text-2xl text-ordination-white leading-relaxed">
                  ✨ {blessing}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Love Note Section */}
      <section className="py-16 md:py-24 px-6 bg-ordination-cream">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="font-body text-lg md:text-xl leading-relaxed text-gray-800 space-y-6 mb-8">
              <p className="font-semibold text-ordination-text-gold">
                I'm so proud of you.
              </p>
              
              <p>
                This is just the beginning of what God will do through your obedience, humility, and faith. Your ministry will touch generations. I'm honored to walk beside you through it all.
              </p>
            </div>
            
            <div className="font-script text-2xl md:text-3xl text-ordination-text-gold">
              With all my love, always —<br />
              <span className="text-red-500">Your Wifey ❤</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-16 md:py-24 px-6 bg-ordination-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ordination-text-gold mb-12">
            Ministry Memories
          </h2>

          {/* Main Carousel Display */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Ministry moment ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === galleryImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-ordination-gold hover:bg-ordination-gold-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-ordination-gold hover:bg-ordination-gold-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex justify-center space-x-2 overflow-x-auto pb-4">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => selectGalleryImage(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === galleryImageIndex
                    ? 'ring-4 ring-ordination-gold scale-110'
                    : 'ring-2 ring-transparent hover:ring-ordination-gold-light opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                />
              </button>
            ))}
          </div>

          {/* Image Counter */}
          <div className="mt-6 font-body text-ordination-text-gold">
            {galleryImageIndex + 1} of {galleryImages.length}
          </div>
        </div>
      </section>

      {/* Bible Verse Footer */}
      <footer className="py-12 px-6 bg-ordination-text-gold">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-body text-xl md:text-2xl text-ordination-white leading-relaxed mb-4 italic">
            "And I will give you shepherds after my own heart, who will feed you with knowledge and understanding."
          </blockquote>
          <cite className="font-serif text-lg text-ordination-gold-light">
            — Jeremiah 3:15
          </cite>
        </div>
      </footer>

      {/* Scroll-Locked Image Section */}
      <section
        id="scroll-section"
        className="relative h-[400vh] bg-ordination-cream"
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ordination-text-gold mb-4">
                Journey of Faith
              </h2>
              <p className="font-body text-lg text-gray-700">
                Scroll to witness the unfolding of His calling
              </p>
            </div>

            {/* Side by Side Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[60vh]">
              {/* Left Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {scrollSectionImages.map((image, index) => (
                  <img
                    key={`left-${index}`}
                    src={image}
                    alt={`Ministry journey ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      index === scrollImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ordination-gold/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white font-body text-sm">
                      {scrollImageIndex + 1} of {scrollSectionImages.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {scrollSectionImages.map((image, index) => {
                  const rightIndex = (index + Math.floor(scrollSectionImages.length / 2)) % scrollSectionImages.length;
                  return (
                    <img
                      key={`right-${index}`}
                      src={scrollSectionImages[rightIndex]}
                      alt={`Ministry journey ${rightIndex + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === scrollImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                      }`}
                    />
                  );
                })}
                <div className="absolute inset-0 bg-gradient-to-t from-ordination-gold/30 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white font-body text-sm">
                      Moments in Ministry
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mt-8 text-center">
              <div className="max-w-md mx-auto bg-ordination-white rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-ordination-gold transition-all duration-300 ease-out"
                  style={{ width: `${((scrollImageIndex + 1) / scrollSectionImages.length) * 100}%` }}
                />
              </div>
              <p className="font-body text-ordination-text-gold mt-2 text-sm">
                Scroll to explore the journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
