import { scrollToElement } from '@/lib/scrollUtils';

const SecuritySection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  const securityFeatures = [
    {
      icon: "🔒",
      title: "Site 100% Seguro",
      description: "Seus dados estão protegidos com certificado SSL"
    },
    {
      icon: "✅",
      title: "Garantia de Entrega",
      description: "Produto original e entregue com segurança"
    },
    {
      icon: "🚚",
      title: "Frete Grátis",
      description: "Entrega gratuita para todo o Brasil"
    },
    {
      icon: "💳",
      title: "Pagamento Seguro",
      description: "Múltiplas formas de pagamento disponíveis"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-diurie-dark text-2xl md:text-3xl font-bold mb-4">
          Compre com total <span className="text-diurie-orange">segurança</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Todas as garantias para você comprar sem preocupação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-diurie-dark font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#comprar" 
            className="cta-button bg-[#36B536] inline-block w-full md:w-auto btn-tem-interesse"
            onClick={handleScrollToComprar}
          >
            QUERO COMPRAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;