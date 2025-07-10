import { ArrowDown } from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

const HeroSection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="relative">
      {/* Fixed Yellow banner at the top */}
      <div className="fixed top-0 left-0 right-0 bg-diurie-yellow py-6 px-4 text-center text-diurie-dark text-lg md:text-xl lg:text-2xl font-bold z-50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>LEVE 3 DIURIE FIT COM DESCONTO ESPECIAL POR </span>
          <span style={{ color: '#c10000' }}>TEMPO LIMITADO</span>
        </div>
      </div>

      {/* Hero section with product image - add top padding to account for fixed banner */}
      <div className="bg-diurie-dark min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-8 lg:px-12 pt-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-diurie-orange">Diurie</span> <br />
              <span style={{ color: '#c10000' }}>Fit Black</span>
            </h1>
            <h2 className="text-diurie-orange text-2xl md:text-3xl font-bold">
              Suplemento com <span className="text-white">ingredientes naturais <br />selecionados</span> que apoia seu bem-estar
            </h2>
            <p className="text-white text-base md:text-lg">
              Suplemento em pó com sabor de laranja que auxilia no equilíbrio corporal.
            </p>
            <p className="text-gray-300 text-sm italic mt-2">
              *Este produto não substitui medicamentos e seus efeitos podem variar conforme o organismo.
            </p>
            <a 
              href="#comprar" 
              className="cta-button inline-block w-full md:w-auto"
              onClick={handleScrollToComprar}
            >
              QUERO COMEÇAR AGORA!
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center relative">
            <img 
              src="/lovable-uploads/c0ed7631-e2f7-4955-ae86-12546bb1d853.png" 
              alt="Veja relatos de quem já testou DiurieFit Black" 
              className="max-w-full h-auto animate-float"
            />
            {/* Disclaimer Seal */}
            <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-2 py-1 rounded-md max-w-[160px] backdrop-blur-sm">
              <p className="text-center leading-tight">
                Resultados individuais; não substitui atendimento médico
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
