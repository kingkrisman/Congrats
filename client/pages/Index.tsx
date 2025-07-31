import { useEffect, useState } from "react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ordinationImages = [
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F263fd4a8fa394212a5108b1a72e7b56e?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2Fbb6e2c21cdb94916b9f6c55cbb4e5b78?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F6852d88a060c4755a95a63f8bbafef80?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F26b4938cf1ec497d8fafaafafdcc682a?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F83ed3c26efdb41a1be330dc4f4f78b41?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2Faeee31fcf1114fceb0dea40aa0430358%2F73ef989db23f496bb3bbaed6c8f97003?format=webp&width=800"
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

  const blessings = [
    "Victory on all sides, my ❤",
    "A ministry filled with light, love, and lasting impact",
    "A heart that continues to burn for God",
    "A life that inspires faith in others",
    "Favor in every season, grace in every step"
  ];

  return (
    <div className="min-h-screen bg-ordination-white">
      {/* Header Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(218, 165, 32, 0.3), rgba(255, 215, 0, 0.4)), 
                             url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f5f5dc;stop-opacity:1" /><stop offset="100%" style="stop-color:%23ffd700;stop-opacity:0.8" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23grad)"/><circle cx="200" cy="150" r="80" fill="rgba(255,255,255,0.1)"/><circle cx="800" cy="200" r="120" fill="rgba(255,255,255,0.08)"/><circle cx="1000" cy="600" r="100" fill="rgba(255,255,255,0.12)"/></svg>')`
          }}
        />
        
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

      {/* Gallery Section Placeholder */}
      <section className="py-16 md:py-24 px-6 bg-ordination-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ordination-text-gold mb-8">
            Precious Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] bg-ordination-cream rounded-lg flex items-center justify-center border-2 border-dashed border-ordination-gold"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="font-body text-ordination-text-gold">
                    Ordination Photo {item}
                  </p>
                  <p className="font-body text-sm text-gray-600 mt-1">
                    (Upload your photos here)
                  </p>
                </div>
              </div>
            ))}
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
