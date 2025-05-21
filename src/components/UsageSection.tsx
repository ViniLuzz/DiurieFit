
const UsageSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/c539cd57-7a9f-4de8-bc55-2ceb8f8725cf.png"
            alt="Modo de preparo do DiurieFit Black" 
            className="max-w-full h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
        
        {/* Full-width guarantee section */}
        <div className="w-full mt-20">
          <div className="bg-diurie-dark text-white p-8 rounded-lg max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-3">
                Acreditamos tanto no nosso produto que você terá a <span className="text-diurie-orange">Super Garantia</span> de 30 dias!
              </h3>
              <p className="mb-6 text-sm">
                Risco Zero Para Você! Para provar, devolvemos o seu dinheiro se o produto não atender suas expectativas. Você terá até 30 dias após a compra para solicitar a devolução do seu dinheiro, simples assim!
              </p>
              <a href="#comprar" className="cta-button block text-center py-3">
                QUERO MEU DIURIEFIT
              </a>
            </div>
            
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/7a90d339-8038-4126-be99-38ec101debda.png" 
                alt="DiurieFit Black com garantia de 30 dias" 
                className="h-auto max-h-52 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsageSection;
