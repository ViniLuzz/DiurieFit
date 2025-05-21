
const SafetySection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center bg-diurie-orange rounded-xl overflow-hidden shadow-lg">
          <div className="md:w-1/2 p-8">
            <h3 className="text-white font-bold text-2xl mb-4">
              DiurieFit Black é seguro para consumo, é dispensado pela ANVISA
            </h3>
            <p className="text-white text-base mb-6">
              Após testes o DiurieFit Black foi 100% dispensado pela ANVISA (Agência de Vigilância Sanitária) e pelo Ministério da Saúde. Não oferece nenhum risco à saúde e não possui efeitos colaterais, seu consumo é totalmente seguro.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/83585dd2-ec32-4056-bd04-c6c8b96301f5.png" 
              alt="Mulher consumindo DiurieFit Black" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;
