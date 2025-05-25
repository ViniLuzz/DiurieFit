
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
          <div className="bg-white overflow-hidden rounded-2xl shadow-lg h-full flex flex-col">
            <div className="bg-diurie-orange py-2">
              <p className="text-white text-center font-bold">EXPERIMENTE</p>
            </div>
            <div className="p-4 flex flex-col items-center flex-grow">
              <h3 className="text-center font-bold text-xl mb-4">COMPRE 1 POTE</h3>
              <div className="h-48 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6418066e-e575-491b-8250-89e1c20a30af.png" 
                  alt="1 pote de DiurieFit Black" 
                  className="h-full object-contain"
                />
              </div>
              <p className="text-center mt-4 mb-2">POR APENAS:</p>
              <div className="flex items-center justify-center">
                <span className="text-lg font-bold">R$</span>
                <span className="text-6xl font-black">157</span>
              </div>
              <p className="text-gray-500 mb-4">VALOR INDIVIDUAL</p>
              <a 
                href="https://app.monetizze.com.br/checkout/DXP286325" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <button className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg w-full hover:bg-green-600 transition-colors mt-auto">
                  COMPRAR AGORA
                </button>
              </a>
              
              {/* Payment methods - black icons without orange card */}
              <div className="mt-4 w-full">
                <p className="text-gray-600 text-xs text-center font-medium mb-2">FORMAS DE PAGAMENTO</p>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/a5a8d58a-023c-422a-b5de-ebb95803e03f.png" 
                    alt="Métodos de pagamento" 
                    className="h-auto w-11/12"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm">FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
          </div>

          {/* 3 Potes */}
          <div className="bg-white overflow-hidden rounded-2xl shadow-lg transform scale-105 z-10 h-full flex flex-col">
            <div className="bg-diurie-orange py-2">
              <p className="text-white text-center font-bold">R$109 POR POTE</p>
            </div>
            <div className="p-4 flex flex-col items-center flex-grow">
              <h3 className="text-center font-bold text-xl mb-4">COMPRE 3 POTES</h3>
              <div className="h-48 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/47c2f45a-8d7d-4a95-a097-cc9ec5870b1c.png" 
                  alt="3 potes de DiurieFit Black" 
                  className="h-full object-contain"
                />
              </div>
              <p className="text-center mt-4 mb-2">POR APENAS:</p>
              <div className="flex items-center justify-center">
                <span className="text-lg font-bold">R$</span>
                <span className="text-6xl font-black">327</span>
              </div>
              <p className="text-gray-500 mb-4">ECONOMIA DE R$144,00</p>
              <a 
                href="https://app.monetizze.com.br/checkout/DDG286326" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <button className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg w-full hover:bg-green-600 transition-colors mt-auto">
                  COMPRAR AGORA
                </button>
              </a>
              
              {/* Payment methods - black icons without orange card */}
              <div className="mt-4 w-full">
                <p className="text-gray-600 text-xs text-center font-medium mb-2">FORMAS DE PAGAMENTO</p>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/a5a8d58a-023c-422a-b5de-ebb95803e03f.png" 
                    alt="Métodos de pagamento" 
                    className="h-auto w-11/12"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm">FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
          </div>

          {/* 5 Potes */}
          <div className="bg-white overflow-hidden rounded-2xl shadow-lg h-full flex flex-col">
            <div className="bg-diurie-orange py-2">
              <p className="text-white text-center font-bold">R$93,40 POR POTE</p>
            </div>
            <div className="p-4 flex flex-col items-center flex-grow">
              <h3 className="text-center font-bold text-xl mb-4">COMPRE 5 POTES</h3>
              <div className="h-48 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/3164dd5e-aeee-42e5-87fc-74be833bfbed.png" 
                  alt="5 potes de DiurieFit Black" 
                  className="h-full object-contain"
                />
              </div>
              <p className="text-center mt-4 mb-2">POR APENAS:</p>
              <div className="flex items-center justify-center">
                <span className="text-lg font-bold">R$</span>
                <span className="text-6xl font-black">467</span>
              </div>
              <p className="text-gray-500 mb-4">ECONOMIA DE R$318,00</p>
              <a 
                href="https://app.monetizze.com.br/checkout/DBR286327" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full"
              >
                <button className="bg-green-500 text-white text-lg font-bold py-3 px-6 rounded-lg w-full hover:bg-green-600 transition-colors mt-auto">
                  COMPRAR AGORA
                </button>
              </a>
              
              {/* Payment methods - black icons without orange card */}
              <div className="mt-4 w-full">
                <p className="text-gray-600 text-xs text-center font-medium mb-2">FORMAS DE PAGAMENTO</p>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/a5a8d58a-023c-422a-b5de-ebb95803e03f.png" 
                    alt="Métodos de pagamento" 
                    className="h-auto w-11/12"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4">
                <span className="text-sm">FRETE GRÁTIS PARA TODO O BRASIL</span>
              </div>
            </div>
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
