import { useEffect, useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

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

  useEffect(() => {
    setIsVisible(true);

    // Set up image rotation every 2 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % ordinationImages.length
      );
    }, 2000);

    return () => clearInterval(imageInterval);
  }, [ordinationImages.length]);

  useEffect(() => {
    // Set up auto-scroll for gallery every 5 seconds
    const galleryInterval = setInterval(() => {
      setGalleryImageIndex((prevIndex) =>
        (prevIndex + 1) % galleryImages.length
      );
    }, 5000);

    return () => clearInterval(galleryInterval);
  }, [galleryImages.length]);

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
  };

  const prevGalleryImage = () => {
    setGalleryImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-ordination-white">
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
              backgroundImage: `linear-gradient(45deg, rgba(218, 165, 32, 0.6), rgba(255, 215, 0, 0.7)), url('${image}')`
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
              <img
                src={galleryImages[galleryImageIndex]}
                alt={`Ministry moment ${galleryImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
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
                onClick={() => setGalleryImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === galleryImageIndex
                    ? 'ring-4 ring-ordination-gold scale-110'
                    : 'ring-2 ring-transparent hover:ring-ordination-gold-light opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
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
    </div>
  );
}
