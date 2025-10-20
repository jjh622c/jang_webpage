import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

export default function JangInyoungPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [aboutImageIndex, setAboutImageIndex] = useState(0);
  const [showAllArtworks, setShowAllArtworks] = useState(false);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);

  // Artworks data - Curated collection from artist's best works
  const artworks = [
    {
      id: 1,
      title: 'Geometric Ten Longevity Symbols',
      year: '2013',
      medium: 'Tin powder (주석가루), Canvas on Acrylic',
      size: '116.8 × 90.9 cm (50F)',
      description: 'Vibrant abstract interpretation of traditional longevity symbols with signature relief texture technique showcasing mountains, sun, and geometric patterns',
      color: '#E63946',
      image: '/images/artworks/artwork-new-01.webp'
    },
    {
      id: 2,
      title: 'Five Peaks - Ten Longevity Symbols',
      year: '2023',
      medium: 'Canvas on Acrylic',
      size: '53.0 × 45.5 cm (10F)',
      description: 'Expressive brushwork depicting the traditional Korean royal symbol of five peaks (오봉) with vibrant colors and modern interpretation',
      color: '#457B9D',
      image: '/images/artworks/artwork-new-02.webp'
    },
    {
      id: 3,
      title: 'Auspicious Energy (瑞氣)',
      year: '2010',
      medium: 'Panel, Mulberry paper, Acrylic',
      size: '90.9 × 72.7 cm (30F)',
      description: 'Exceptional relief texture work symbolizing auspicious energy with sun, clouds, and mountains in bold geometric composition',
      color: '#F4A261',
      image: '/images/artworks/artwork-new-03.webp'
    },
    {
      id: 4,
      title: 'Geometric Longevity Symbols',
      year: '2013',
      medium: 'Canvas on Acrylic',
      size: '90.9 × 72.7 cm (30F)',
      description: 'Abstract geometric patterns with traditional symbols rendered in vibrant modern palette showing water, mountains, and natural elements',
      color: '#2A9D8F',
      image: '/images/artworks/artwork-new-04.webp'
    },
    {
      id: 5,
      title: 'Dreams Come True',
      year: '2020',
      medium: 'Panel, Mulberry paper, Acrylic',
      size: '53.0 × 45.5 cm (10F)',
      description: 'Celebratory work depicting mountains, sun, and people gathering in celebration - symbolizing aspirations and hope fulfilled',
      color: '#F4A261',
      image: '/images/artworks/artwork-new-05.webp'
    },
    {
      id: 6,
      title: 'Hometown Village',
      year: '2020',
      medium: 'Canvas on Acrylic',
      size: '116.8 × 90.9 cm (50F)',
      description: 'Pastoral Korean village landscape with majestic mountains, demonstrating versatility beyond abstract work with vibrant expressionist style',
      color: '#457B9D',
      image: '/images/artworks/artwork-new-06.webp'
    },
    {
      id: 7,
      title: 'Longevity Story',
      year: '2016',
      medium: 'Tin powder (주석가루), Canvas on Acrylic',
      size: '90.9 × 72.7 cm (30F)',
      description: 'Textured geometric composition with sunset/sunrise, mountains, and symbolic elements in warm color palette',
      color: '#E63946',
      image: '/images/artworks/artwork-new-07.webp'
    },
    {
      id: 8,
      title: 'Longevity and Prosperity',
      year: '2023',
      medium: 'Panel, Tin powder (주석가루), Acrylic',
      size: '80.8 × 51.0 cm (25M)',
      description: 'Balanced composition featuring sun, mountains, water, and cranes - comprehensive display of all longevity symbols',
      color: '#457B9D',
      image: '/images/artworks/artwork-new-08.webp'
    },
    {
      id: 9,
      title: 'Longevity Story II',
      year: '2021',
      medium: 'Canvas on Acrylic',
      size: '90.9 × 65.1 cm (30P)',
      description: 'Mountain landscape with vibrant sunset and village scene, showcasing expressive brushwork and bold color contrasts',
      color: '#2A9D8F',
      image: '/images/artworks/artwork-new-09.webp'
    },
    {
      id: 10,
      title: 'Autumn Scene of Mt. Naejang',
      year: '2016',
      medium: 'Canvas on Acrylic',
      size: '72.7 × 60.6 cm (20F)',
      description: 'Colorful autumn mountain landscape of famous Mt. Naejang with dynamic brushwork and rich seasonal palette',
      color: '#F4A261',
      image: '/images/artworks/artwork-new-10.webp'
    },
    {
      id: 11,
      title: 'Thawing of Mt. Geumgang',
      year: '2011',
      medium: 'Canvas on Acrylic',
      size: '53.0 × 45.5 cm (10F)',
      description: 'Iconic North Korean mountain with ice and snow melting, featuring dramatic rock formations and clouds',
      color: '#457B9D',
      image: '/images/artworks/artwork-new-11.webp'
    },
    {
      id: 12,
      title: 'New Year Sunrise Festival',
      year: '2010',
      medium: 'Canvas on Acrylic',
      size: '53.0 × 45.5 cm (10F)',
      description: 'Joyful celebration scene of people gathering for traditional New Year sunrise festival with cranes, mountains, and vibrant sky',
      color: '#E63946',
      image: '/images/artworks/artwork-new-12.webp'
    }
  ];

  const exhibitions = [
    { year: 2023, title: 'Solo Exhibition at POSCO Museum', location: 'Seoul, Korea' },
    { year: 2022, title: 'Invitation Exhibition at Hyundai Gallery', location: 'Busan, Korea' },
    { year: 2021, title: 'Solo Exhibition at Berlin Art Center', location: 'Berlin, Germany' },
    { year: 2020, title: 'KBS Busan 70th Anniversary Exhibition', location: 'Busan, Korea' },
    { year: 2019, title: 'COEX Art Festival Solo Exhibition', location: 'Seoul, Korea' },
  ];

  const tenSymbols = [
    { name: 'Sun', meaning: 'Source of all things' },
    { name: 'Mountain', meaning: 'Eternal unchanging' },
    { name: 'Water', meaning: 'Flow of life' },
    { name: 'Rock', meaning: 'Solidity' },
    { name: 'Cloud', meaning: 'Freedom & transcendence' },
    { name: 'Pine', meaning: 'Integrity & fidelity' },
    { name: 'Herb', meaning: 'Eternal youth' },
    { name: 'Turtle', meaning: 'Longevity' },
    { name: 'Crane', meaning: 'Nobility' },
    { name: 'Deer', meaning: 'Wealth' },
  ];

  // About section images - Historical moments from artist's career
  const aboutImages = [
    { url: '/images/about/photo-1.jpg', caption: 'With President Kim Young-sam at Exhibition' },
    { url: '/images/about/photo-2.jpg', caption: 'Interview with German YTN at Solo Exhibition' },
    { url: '/images/about/photo-3.jpg', caption: '65th Busan Culture Award Certificate (2022)' },
  ];

  // News & Updates data
  const newsUpdates = [
    {
      id: 1,
      date: '2024.03.15',
      title: 'Upcoming Exhibition at Seoul Art Center',
      excerpt: 'New collection featuring contemporary interpretations of traditional Korean longevity symbols...',
      category: 'Exhibition'
    },
    {
      id: 2,
      date: '2024.02.28',
      title: 'Interview with Art Magazine Korea',
      excerpt: 'Discussing the intersection of traditional and modern art in Korean contemporary scene...',
      category: 'Press'
    },
    {
      id: 3,
      date: '2024.01.10',
      title: 'Award Recognition for Contribution to Korean Art',
      excerpt: 'Honored for lifetime achievement in promoting Korean traditional aesthetics globally...',
      category: 'Award'
    },
  ];

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(artworks[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % artworks.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(artworks[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + artworks.length) % artworks.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(artworks[newIndex]);
  };

  const nextAboutImage = () => {
    setAboutImageIndex((prev) => (prev + 1) % aboutImages.length);
  };

  const prevAboutImage = () => {
    setAboutImageIndex((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  // Auto-slide effect for hero section
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % artworks.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [artworks.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-serif">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">JANG IN-YOUNG</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-red-600 transition-colors text-sm tracking-wide">About</a>
            <a href="#gallery" className="hover:text-red-600 transition-colors text-sm tracking-wide">Artworks</a>
            <a href="#exhibitions" className="hover:text-red-600 transition-colors text-sm tracking-wide">Exhibitions</a>
            <a href="#news" className="hover:text-red-600 transition-colors text-sm tracking-wide">News</a>
            <a href="#philosophy" className="hover:text-red-600 transition-colors text-sm tracking-wide">Philosophy</a>
            <a href="#contact" className="hover:text-red-600 transition-colors text-sm tracking-wide">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <a href="#about" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#gallery" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Artworks</a>
              <a href="#exhibitions" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Exhibitions</a>
              <a href="#news" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>News</a>
              <a href="#philosophy" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
              <a href="#contact" className="block hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-6xl font-bold tracking-tight">Jang In-Young</h1>
                <p className="text-2xl text-gray-600">Modern Interpretation of Tradition</p>
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Unique artistic world elevating traditional Korean longevity paintings to modern aesthetics
              </p>
              <div className="inline-flex space-x-3 pt-4 px-6 py-3 bg-gray-100 rounded-lg">
                <div className="w-14 h-2 bg-red-600 shadow-sm"></div>
                <div className="w-14 h-2 bg-blue-600 shadow-sm"></div>
                <div className="w-14 h-2 bg-yellow-500 shadow-sm"></div>
                <div className="w-14 h-2 bg-white shadow-md border border-gray-200"></div>
                <div className="w-14 h-2 bg-black shadow-sm"></div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
              <img
                src="/images/hero.webp"
                alt="Featured Artwork - 65th Busan Culture Award"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks Slide Section */}
      <section className="relative h-[600px] overflow-hidden bg-gray-900">
        {/* Background Slides */}
        <div className="absolute inset-0">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === heroSlideIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex items-end justify-center pb-20 px-6">
          <div className="text-center text-white max-w-4xl">
            <h3 className="text-5xl font-bold mb-4">{artworks[heroSlideIndex].title}</h3>
            <p className="text-xl mb-2">{artworks[heroSlideIndex].year} | {artworks[heroSlideIndex].size}</p>
            <p className="text-lg text-gray-300 mb-8">{artworks[heroSlideIndex].description}</p>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-3">
              {artworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setHeroSlideIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === heroSlideIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About the Artist</h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-gray-700">
              Jang In-Young (b.1938) is a distinguished Western-style painter and philosopher based in Busan. As Professor Emeritus at Busan Women's University (31 years of teaching), he has dedicated his life to reinterpreting Korean traditional "Ten Symbols of Longevity" in a contemporary context.
            </p>
            <p className="text-gray-700">
              Through his unique relief texture technique using tin powder and mulberry paper, combined with geometric compositions and modern interpretations of traditional five colors (Obangsaek), he has created a distinctive artistic language that bridges tradition and modernity.
            </p>
            <p className="text-gray-700">
              His achievements include receiving the Presidential Commendation (2003), the 65th Busan Metropolitan City Culture Award (2022), and 12th Samyang Culture Grand Prize (2015). As a member of the German Artists' Association (BBK), his work has been exhibited internationally in Germany, France, the United States, Japan, China, Turkey, Switzerland, and beyond, with his masterpiece permanently preserved at the International Culture Museum in Gifhorn, Germany.
            </p>
            <p className="text-gray-700">
              Holder of a Ph.D. in Philosophy from Dong-A University, he has authored 6 books and 13 academic papers on art philosophy, while maintaining an active artistic career spanning over 58 years since 1966.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-600">23</div>
              <div className="text-sm text-gray-600">Solo Exhibitions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">300+</div>
              <div className="text-sm text-gray-600">Group Exhibitions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">10+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-600">58+</div>
              <div className="text-sm text-gray-600">Years Active</div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Gallery</h3>
            <div className="relative max-w-2xl mx-auto">
              <div className="aspect-video rounded-lg shadow-xl overflow-hidden bg-gray-100">
                <img
                  src={aboutImages[aboutImageIndex].url}
                  alt={aboutImages[aboutImageIndex].caption}
                  className="w-full h-full object-contain bg-gray-900"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm text-center">{aboutImages[aboutImageIndex].caption}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevAboutImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft size={24} className="text-gray-800" />
              </button>
              <button
                onClick={nextAboutImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight size={24} className="text-gray-800" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setAboutImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === aboutImageIndex ? 'bg-red-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Artworks</h2>
          <p className="text-center text-gray-600 mb-12">Click to view artwork details</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAllArtworks ? artworks : artworks.slice(0, 3)).map((artwork, index) => (
              <div
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(showAllArtworks ? index : artworks.findIndex(a => a.id === artwork.id))}
              >
                <div className="aspect-[4/5] rounded-lg shadow-lg overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-lg">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.year} | {artwork.size}</p>
                  <p className="text-sm text-gray-500">{artwork.medium}</p>
                </div>
              </div>
            ))}
          </div>

          {!showAllArtworks && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllArtworks(true)}
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                View All Artworks →
              </button>
            </div>
          )}

          {showAllArtworks && (
            <div className="text-center mt-12">
              <button
                onClick={() => {
                  setShowAllArtworks(false);
                  document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                ← Show Less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={48} />
          </button>

          <div className="max-w-5xl w-full">
            <div className="aspect-[4/5] rounded-lg mb-6 mx-auto max-h-[70vh] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="text-white text-center space-y-2">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.year} | {selectedImage.size}</p>
              <p className="text-gray-300">{selectedImage.medium}</p>
              <p className="text-gray-400 pt-4">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Exhibitions Section */}
      <section id="exhibitions" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Exhibition History</h2>
          <p className="text-center text-gray-600 mb-12">Major Solo & Invitation Exhibitions</p>

          <div className="space-y-8">
            {exhibitions.map((exhibition, index) => (
              <div key={index} className="flex items-start space-x-6 border-l-4 border-red-600 pl-6 py-2">
                <div className="text-3xl font-bold text-gray-300 min-w-[80px]">{exhibition.year}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{exhibition.title}</h3>
                  <p className="text-gray-600">{exhibition.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">News & Updates</h2>
          <p className="text-center text-gray-600 mb-12">Latest exhibitions, press coverage, and announcements</p>

          <div className="grid md:grid-cols-3 gap-8">
            {newsUpdates.map((news) => (
              <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-red-100 text-red-600 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 leading-tight">{news.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{news.excerpt}</p>
                  <button className="mt-4 text-red-600 hover:text-red-700 font-semibold text-sm flex items-center">
                    Read more →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-300 hover:border-red-600 hover:text-red-600 rounded-lg transition-colors">
              View All News
            </button>
          </div>
        </div>
      </section>

      {/* Ten Symbols Philosophy */}
      <section id="philosophy" className="py-20 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Ten Symbols of Longevity</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            The Ten Symbols of Longevity represent the pinnacle of Korean traditional art. Through ten natural elements symbolizing eternal life, they embody the aspirations and philosophy of the Korean people.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {tenSymbols.map((symbol, index) => (
              <div key={index} className="relative group">
                <div className="text-center p-8 rounded-lg bg-white border-2 border-gray-200 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-xl h-full">
                  <div className="text-6xl font-serif mb-4 text-gray-800 tracking-wider">
                    {['日', '山', '水', '石', '雲', '松', '草', '龜', '鶴', '鹿'][index]}
                  </div>
                  <div className="font-bold text-lg mb-2 tracking-wide">{symbol.name}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{symbol.meaning}</div>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50/20 to-yellow-50/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Contact</h2>
          <p className="text-center text-gray-600 mb-12">Artwork Inquiries & Exhibition Collaboration</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow">
              <MapPin className="mx-auto mb-4 text-red-600" size={32} />
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-sm text-gray-600">37-1, Sumi-ro 50beon-gil, Suyeong-gu, Busan, Korea</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <Mail className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="font-bold mb-2">Email</h3>
              <a href="mailto:inyoungart@naver.com" className="text-sm text-blue-600 hover:underline">
                inyoungart@naver.com
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow">
              <Phone className="mx-auto mb-4 text-green-600" size={32} />
              <h3 className="font-bold mb-2">Phone</h3>
              <a href="tel:1577-9219" className="text-sm text-green-600 hover:underline">
                1577-9219
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-600 text-sm">
          <p className="mb-2">© 2025 Jang In-Young. All rights reserved.</p>
          <p>Modern Interpretation of Korean Traditional Art</p>
          <div className="flex justify-center space-x-3 mt-4 px-4 py-2 bg-gray-50 rounded-lg inline-flex mx-auto">
            <div className="w-10 h-2 bg-red-600 shadow-sm"></div>
            <div className="w-10 h-2 bg-blue-600 shadow-sm"></div>
            <div className="w-10 h-2 bg-yellow-500 shadow-sm"></div>
            <div className="w-10 h-2 bg-white shadow-md border border-gray-200"></div>
            <div className="w-10 h-2 bg-black shadow-sm"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
