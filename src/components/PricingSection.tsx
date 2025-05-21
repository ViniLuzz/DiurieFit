
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
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/lovable-uploads/107dcf7e-9e6c-4d6a-8ef0-46389976452c.png" 
              alt="1 pote de DiurieFit Black" 
              className="w-full h-auto"
            />
          </div>

          {/* 3 Potes */}
          <div className="overflow-hidden rounded-2xl shadow-lg transform scale-105 z-10">
            <img 
              src="/lovable-uploads/2dc8c9f6-b5d0-42f4-8a1f-ff0960211a4c.png" 
              alt="3 potes de DiurieFit Black" 
              className="w-full h-auto"
            />
          </div>

          {/* 5 Potes */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
              
          {/* Pricing Box */}
          <div className="border-2 border-diurie-orange rounded-lg overflow-hidden max-w-sm">
            <div className="bg-diurie-orange text-white py-2 text-center font-bold">
              EXPERIMENTE
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-center mb-4">COMPRE 1 POTE</h3>
              
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/107dcf7e-9e6c-4d6a-8ef0-46389976452c.png" 
                  alt="DiurieFit Black" 
                  className="h-32 object-contain"
                />
              </div>
              
              <p className="text-center text-gray-600 text-sm mb-1">POR APENAS:</p>
              
              <div className="text-center mb-2">
                <span className="text-gray-600 text-lg">R$</span>
                <span className="text-5xl font-bold">157</span>
              </div>
              
              <p className="text-center text-gray-600 text-xs mb-4">VALOR INDIVIDUAL</p>
              
              <a href="#comprar" className="bg-[#36B536] text-white font-bold py-3 px-6 rounded text-center block mb-4 hover:brightness-110 transition-all">
                COMPRAR AGORA
              </a>
              
              <div className="flex items-center justify-center text-xs text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                FRETE GRÁTIS PARA TODO O BRASIL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-6 py-3 mb-6">
            <img 
              src="/lovable-uploads/d97a376c-6056-40aa-a20f-5d279fc69cc9.png" 
              alt="Garantia de 30 dias" 
              className="h-20"
            />
            <p className="text-diurie-dark font-semibold ml-4">
              30 DIAS DE GARANTIA INCONDICIONAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
