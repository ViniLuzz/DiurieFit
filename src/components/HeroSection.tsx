
import { ArrowDown } from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

const HeroSection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="relative">
      {/* Yellow banner at the top */}
      <div className="bg-diurie-yellow py-3 px-4 text-center text-diurie-dark text-sm md:text-base lg:text-lg font-medium">
        <span>QUANTO MAIS POTES LEVAR, </span>
        <span className="text-red-600 font-bold">MAIS DESCONTOS</span>
        <span> VOCÊ GANHA!</span>
      </div>

      {/* Hero section with product image */}
      <div className="bg-diurie-dark min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-diurie-orange">Diurie</span> <br />
              <span className="text-diurie-orange">Fit Black</span>
            </h1>
            <h2 className="text-diurie-orange text-2xl md:text-3xl font-bold">
              Transforme seu corpo: <span className="text-white">resultados <br />em apenas 6 dias!</span>
            </h2>
            <p className="text-white text-base md:text-lg">
              Suplemento em pó com sabor de laranja, 10x mais eficaz na queima de gordura e redução de inchaço.
            </p>
            <a 
              href="#comprar" 
              className="cta-button inline-block w-full md:w-auto"
              onClick={handleScrollToComprar}
            >
              QUERO TRANSFORMAR MEU CORPO!
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/c0ed7631-e2f7-4955-ae86-12546bb1d853.png" 
              alt="Antes e depois - Resultados com DiurieFit Black" 
              className="max-w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
