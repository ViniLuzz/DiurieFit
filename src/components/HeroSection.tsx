import { ArrowDown } from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  const formatTime = (time: number) => String(time).padStart(2, '0');

  return (
    <div className="relative">
      {/* Fixed Yellow banner at the top */}
      <div className="fixed top-0 left-0 right-0 bg-diurie-yellow py-6 px-4 text-center text-diurie-dark text-lg md:text-xl lg:text-2xl font-bold z-50">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <span>LEVE 3 DIURIE FIT COM DESCONTO ESPECIAL POR </span>
          <span className="text-diurie-orange">TEMPO LIMITADO</span>
          <span className="text-2xl md:text-3xl lg:text-4xl">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
          </span>
        </div>
      </div>

      {/* Hero section with product image - add top padding to account for fixed banner */}
      <div className="bg-diurie-dark min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-12 px-4 md:px-8 lg:px-12 pt-32">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2 text-left space-y-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="text-diurie-orange">Diurie</span> <br />
              <span className="text-diurie-orange">Fit Black</span>
            </h1>
            <h2 className="text-diurie-orange text-2xl md:text-3xl font-bold">
              Reduza medidas e retenção com <span className="text-white">ingredientes naturais <br />selecionados</span>
            </h2>
            <p className="text-white text-base md:text-lg">
              Suplemento em pó com sabor de laranja que pode auxiliar no processo de redução de retenção.
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
