
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Oliveira",
      location: "São Paulo/SP",
      text: "Perdi 10 quilos em 3 meses e me sinto com muito mais energia! DiurieFit Black realmente funciona, recomendo demais!",
      stars: 5,
    },
    {
      name: "Pedro Santos",
      location: "Rio de Janeiro/RJ",
      text: "Em apenas dois meses, já perdi 8 quilos e minha barriga diminuiu significativamente. É incrível como me sinto mais disposto agora!",
      stars: 5,
    },
    {
      name: "Ana Luiza Silva",
      location: "Belo Horizonte/MG",
      text: "Já perdi 6 quilos em apenas um mês e estou muito satisfeita com os resultados! O melhor é que não senti nenhum efeito colateral.",
      stars: 4,
    },
  ];

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

        {/* Text Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-600 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-diurie-dark">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
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
