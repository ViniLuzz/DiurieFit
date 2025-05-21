
const UsageSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/c539cd57-7a9f-4de8-bc55-2ceb8f8725cf.png"
            alt="Modo de preparo do DiurieFit Black" 
            className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
        
        <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Super Garantia Section */}
          <div className="bg-diurie-dark text-white p-6 rounded-lg max-w-md">
            <h3 className="text-xl font-bold mb-3">
              Acreditamos tanto no nosso produto que você terá a <span className="text-diurie-orange">Super Garantia</span> de 30 dias!
            </h3>
            <p className="mb-4 text-sm">
              Risco Zero Para Você! Para provar, devolvemos o seu dinheiro se o produto não atender suas expectativas. Você terá até 30 dias após a compra para solicitar a devolução do seu dinheiro, simples assim!
            </p>
            <a href="#comprar" className="cta-button bg-[#36B536] inline-block w-full py-3 text-center">
              QUERO MEU DIURIEFIT
            </a>
          </div>
          
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
    </div>
  );
};

export default UsageSection;
