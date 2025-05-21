
const BeforeAfterSection = () => {
  return (
    <div className="bg-diurie-dark py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Resultados <span className="text-diurie-orange">visíveis em apenas 6 dias!</span>
        </h2>
        
        {/* Before and After Models */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white p-4 rounded-lg w-full md:w-80 h-full">
            <h3 className="text-diurie-dark text-lg font-bold text-center mb-2">ANTES</h3>
            <div className="overflow-hidden rounded-lg h-[450px]">
              <img 
                src="/lovable-uploads/db9a8ba1-cd14-424a-93ff-13827c101725.png" 
                alt="Antes de usar DiurieFit Black" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg w-full md:w-80 h-full">
            <h3 className="text-diurie-dark text-lg font-bold text-center mb-2">DEPOIS</h3>
            <div className="overflow-hidden rounded-lg h-[450px]">
              <img 
                src="/lovable-uploads/c5bf8908-6ae8-4a3b-81d3-e31ae1d291b0.png" 
                alt="Depois de usar DiurieFit Black" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300 text-lg">
            Resultados reais de clientes que utilizaram o <span className="text-diurie-orange font-bold">DiurieFit Black</span> seguindo as recomendações.
          </p>
          <a href="#comprar" className="cta-button mt-6 inline-block">
            QUERO ESSES RESULTADOS!
          </a>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
