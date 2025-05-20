
const PricingSection = () => {
  return (
    <div id="comprar" className="bg-diurie-dark py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold mb-2">
          Escolha o seu <span className="text-diurie-orange">kit ideal</span> para o seu tratamento
        </h2>
        <p className="text-white text-center mb-4">
          Para melhores resultados indicamos os kits acima de 3 a 5 unidades.
        </p>
        <p className="text-diurie-yellow text-center mb-8">
          Deslize para baixo e ganhe mais DESCONTOS!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 1 Pote */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-diurie-orange py-2 text-white text-center font-bold">
              EXPERIMENTE
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">COMPRE 1 POTE</h3>
              <img 
                src="/lovable-uploads/263a93b2-7a88-48d4-bca6-95c4a5c6a62e.png" 
                alt="1 pote de DiurieFit Black" 
                className="w-40 h-auto mb-4"
              />
              <p className="text-gray-500 text-center mb-2">POR APENAS:</p>
              <p className="text-5xl font-bold text-center mb-2">R$ 157</p>
              <p className="text-gray-500 text-xs text-center mb-4">VALOR INDIVIDUAL</p>
              <a href="#" className="cta-button w-full">
                COMPRAR AGORA
              </a>
              <div className="flex items-center mt-4 text-xs text-gray-500">
                <span>🚚 FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
          </div>

          {/* 3 Potes */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform scale-105 z-10">
            <div className="bg-diurie-orange py-2 text-white text-center font-bold">
              R$109 POR POTE
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">COMPRE 3 POTES</h3>
              <img 
                src="/lovable-uploads/263a93b2-7a88-48d4-bca6-95c4a5c6a62e.png" 
                alt="3 potes de DiurieFit Black" 
                className="w-40 h-auto mb-4"
              />
              <p className="text-gray-500 text-center mb-2">POR APENAS:</p>
              <p className="text-5xl font-bold text-center mb-2">R$ 327</p>
              <p className="text-gray-500 text-xs text-center mb-4">ECONOMIA DE R$144,00</p>
              <a href="#" className="cta-button w-full">
                COMPRAR AGORA
              </a>
              <div className="flex items-center mt-4 text-xs text-gray-500">
                <span>🚚 FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
          </div>

          {/* 5 Potes */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-diurie-orange py-2 text-white text-center font-bold">
              R$93,40 POR POTE
            </div>
            <div className="p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4 text-center">COMPRE 5 POTES</h3>
              <img 
                src="/lovable-uploads/263a93b2-7a88-48d4-bca6-95c4a5c6a62e.png" 
                alt="5 potes de DiurieFit Black" 
                className="w-40 h-auto mb-4"
              />
              <p className="text-gray-500 text-center mb-2">POR APENAS:</p>
              <p className="text-5xl font-bold text-center mb-2">R$ 467</p>
              <p className="text-gray-500 text-xs text-center mb-4">ECONOMIA DE R$318,00</p>
              <a href="#" className="cta-button w-full">
                COMPRAR AGORA
              </a>
              <div className="flex items-center mt-4 text-xs text-gray-500">
                <span>🚚 FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
