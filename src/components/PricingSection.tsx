
const PricingSection = () => {
  return (
    <div id="comprar" className="bg-diurie-dark py-16">
      <div className="container mx-auto px-4">
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
            <img 
              src="/lovable-uploads/863b2199-1c17-4d14-b8a3-96553f0a0ec8.png" 
              alt="5 potes de DiurieFit Black" 
              className="w-full h-auto"
            />
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
