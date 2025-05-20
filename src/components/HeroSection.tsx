
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Yellow banner at the top */}
      <div className="bg-diurie-yellow py-3 px-4 text-center text-diurie-dark text-sm md:text-base lg:text-lg font-medium">
        <span>QUANTO MAIS POTES LEVAR, </span>
        <span className="text-red-600 font-bold">MAIS DESCONTOS</span>
        <span> VOCÊ GANHA!</span>
      </div>

      {/* Hero section with product image */}
      <div className="bg-diurie-dark min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-8 lg:px-12 bg-[url('/lovable-uploads/6c224e4c-454b-4188-ae82-abbbf08735d8.png')] bg-cover bg-center bg-opacity-80">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-diurie-orange">Diurie</span> <br />
              <span className="text-diurie-orange">Fit Black</span>
            </h1>
            <h2 className="text-diurie-orange text-2xl md:text-3xl font-bold">
              Pó emagrecedor 10x <br />
              mais eficaz <span className="text-white">com sabor <br />de laranja</span>
            </h2>
            <p className="text-white text-base md:text-lg">
              O DiurieFit Black é diferente de tudo que existe no mercado. O que levaria 30 dias, agora você terá resultados nos primeiros 6 dias de uso.
            </p>
            <a href="#comprar" className="cta-button inline-block w-full md:w-auto">
              É ISSO QUE PRECISO!
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/6c224e4c-454b-4188-ae82-abbbf08735d8.png" 
              alt="DiurieFit Black - Pote do produto" 
              className="max-w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
      
      {/* Orange banner */}
      <div className="bg-diurie-orange py-6 px-4 text-center">
        <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
          Nova embalagem <span className="text-diurie-dark">novos resultados!</span>
        </h3>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default HeroSection;
