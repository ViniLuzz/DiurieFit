
const UsageSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-diurie-dark text-xl font-bold mb-2">
              Recomendação de Uso do <span className="text-diurie-orange">DiurieFit Black:</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Basta adicionar uma colher (5g) em um copo de água ou outra bebida de sua preferência, mexer com auxílio de uma colher até a completa dissolução e consumir imediatamente. Consumir uma vez ao dia.
            </p>
            <a href="#comprar" className="cta-button inline-block">
              ESCOLHER MEU KIT
            </a>
          </div>
          <div className="flex justify-center">
            <img 
      
              alt="Modo de preparo do DiurieFit Black" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              
              alt="DiurieFit Black com selo de garantia de 30 dias" 
              className="max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-diurie-dark text-xl font-bold mb-2">
              Acreditamos tanto no nosso produto que você terá a 
              <span className="text-diurie-orange"> Super Garantia de 30 dias!</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Risco Zero Para Você! Para provar, devolvemos o seu dinheiro caso você não fique satisfeito. Basta entrar em contato com a empresa até 30 dias após a compra para solicitar a devolução do seu dinheiro, simples assim!
            </p>
            <a href="#comprar" className="cta-button inline-block">
              QUERO MEU DIUREFIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageSection;
