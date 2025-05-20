
const BeforeAfterSection = () => {
  return (
    <div className="bg-diurie-dark py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Nova embalagem <span className="text-diurie-orange">novos resultados!</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/07b6249a-879d-4079-9178-790588ec275b.png" 
              alt="Antiga e nova embalagem do DiurieFit Black" 
              className="max-w-full h-auto rounded-lg"
            />
            <p className="text-gray-300 text-sm mt-2 text-center max-w-3xl">
              O que já era bom, melhorou ainda mais. Agora com uma embalagem moderna e resultados ainda mais potentes.
            </p>
          </div>
        </div>
        
        {/* Before and After Models */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-diurie-dark text-lg font-bold text-center mb-2">ANTES</h3>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/db9a8ba1-cd14-424a-93ff-13827c101725.png" 
                alt="Antes de usar DiurieFit Black" 
                className="w-full h-auto max-h-[500px] object-cover object-top"
              />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <h3 className="text-diurie-dark text-lg font-bold text-center mb-2">DEPOIS</h3>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/lovable-uploads/c5bf8908-6ae8-4a3b-81d3-e31ae1d291b0.png" 
                alt="Depois de usar DiurieFit Black" 
                className="w-full h-auto max-h-[500px] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSection;
