import React from 'react';
import { scrollToElement } from '@/lib/scrollUtils';

const getEmbedUrl = (url: string): string => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return url;
};

const TestimonialsSection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  const testimonialVideos = [
    "https://www.youtube.com/watch?v=example1",
    "https://www.youtube.com/watch?v=example2", 
    "https://www.youtube.com/watch?v=example3",
    "https://www.youtube.com/watch?v=example4",
    "https://www.youtube.com/watch?v=example5",
    "https://www.youtube.com/watch?v=example6"
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-diurie-dark text-2xl md:text-3xl font-bold mb-12">
          Veja o que falam sobre o <span className="text-diurie-orange">DiurieFit Black</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonialVideos.map((video, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <iframe
                src={getEmbedUrl(video)}
                title={`Depoimento ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-6 max-w-2xl mx-auto">
            *Os resultados podem variar de pessoa para pessoa. Este produto não substitui tratamento médico.
          </p>
          <a 
            href="#comprar" 
            className="cta-button bg-[#36B536] inline-block w-full md:w-auto btn-tem-interesse"
            onClick={handleScrollToComprar}
          >
            QUERO EXPERIMENTAR TAMBÉM
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;