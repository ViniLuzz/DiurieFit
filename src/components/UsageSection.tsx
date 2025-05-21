
const UsageSection = () => {
  return (
    <div className="bg-diurie-dark py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Super Garantia Section */}
        <div className="bg-diurie-dark text-white p-6 rounded-lg border border-diurie-orange max-w-md">
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
      </div>
    </div>
  );
};

export default UsageSection;
