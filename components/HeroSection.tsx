import { ArrowDown } from "lucide-react";
import { scrollToElement } from "@/lib/scrollUtils";

const HeroSection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <>
      {/* Banner Promocional Fixo */}
      <div className="fixed top-0 left-0 right-0 bg-diurie-orange text-white text-center py-2 z-50 font-bold">
        🔥 DESCONTO ESPECIAL! Compre agora e GANHE FRETE GRÁTIS! 🔥
      </div>

      {/* Hero Section Principal */}
      <div className="pt-12 bg-diurie-dark text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Principal */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Desperte sua <span className="text-diurie-orange">melhor versão</span> com DiurieFit Black
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300">
                Suplemento em pó com sabor de laranja <span className="highlight-text">10x mais eficaz</span> na queima de gordura e redução de inchaço.
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-diurie-orange">✓</span>
                  <span>Pode auxiliar na queima de gordura</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-diurie-orange">✓</span>
                  <span>Pode ajudar na redução do inchaço</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-diurie-orange">✓</span>
                  <span>Ingredientes naturais selecionados</span>
                </div>
              </div>

              <a href="#comprar" onClick={handleScrollToComprar} className="cta-button inline-block">
                QUERO COMEÇAR AGORA!
              </a>

              <div className="flex items-center justify-center lg:justify-start mt-8">
                <ArrowDown className="text-diurie-orange animate-bounce" size={32} />
              </div>
            </div>

            {/* Imagem do Produto */}
            <div className="relative">
              <img 
                src="/lovable-uploads/d62c7528-6a78-4b8a-8fc1-e562c4c386e8.png" 
                alt="DiurieFit Black - Suplemento em pó sabor laranja" 
                className="w-full max-w-md mx-auto"
              />
              
              {/* Selo de Garantia */}
              <div className="absolute top-4 right-4 bg-diurie-cta text-white rounded-full p-3 text-center shadow-lg">
                <div className="text-sm font-bold">ANVISA</div>
                <div className="text-xs">APROVADO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;