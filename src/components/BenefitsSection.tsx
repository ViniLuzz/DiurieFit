
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Equilíbrio Natural",
      description: "Auxilia no equilíbrio corporal com ingredientes naturais selecionados.",
      icon: "💧"
    },
    {
      title: "Auxílio Natural",
      description: "Pode auxiliar no processo natural do corpo com ingredientes selecionados.",
      icon: "🔥"
    },
    {
      title: "Ação Detox",
      description: "Pode auxiliar na limpeza natural do organismo com ingredientes naturais.",
      icon: "🌿"
    },
    {
      title: "Bem-estar",
      description: "Apoia o bem-estar diário com ingredientes naturais.",
      icon: "👙"
    }
  ];

  return (
    <div className="bg-diurie-dark py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-4">
          Alguns benefícios do <span className="text-diurie-orange">DiurieFit Black</span>
        </h2>
        <p className="text-center text-white mb-12">que vão surpreender você!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="product-benefit-card">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-diurie-orange font-bold text-xl mb-2">{benefit.title}</h3>
              <p className="text-center text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
