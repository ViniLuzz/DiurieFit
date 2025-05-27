
const TestimonialsSection = () => {
  const videoTestimonials = [
    "https://youtube.com/shorts/LYayLua3wt8",
    "https://youtube.com/shorts/1rMlT6QPEJ4",
    "https://youtube.com/shorts/Bs_9_rlo3TA",
    "https://youtube.com/shorts/ecq22TZthBU"
  ];

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-diurie-dark text-center text-2xl md:text-3xl font-bold mb-12">
          O que nossos clientes dizem sobre <span className="text-diurie-orange">DiurieFit Black</span>
        </h2>

        {/* Video Testimonials Section */}
        <div className="mb-16">
          <h3 className="text-diurie-dark text-center text-xl md:text-2xl font-bold mb-8">
            Veja os depoimentos reais dos nossos clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="aspect-[9/16] rounded-lg overflow-hidden">
                  <iframe
                    src={getEmbedUrl(video)}
                    title={`Depoimento ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#comprar" className="cta-button inline-block px-10">
            QUERO EXPERIMENTAR TAMBÉM
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
