
const SafetySection = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center bg-diurie-orange rounded-xl overflow-hidden">
          <div className="md:w-2/5">
            <img 
              src="/lovable-uploads/8014ed2d-fe21-4a36-bf30-baf96c125ca3.png" 
              alt="Mulher tomando DiurieFit Black" 
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-3/5 p-8">
            <h3 className="text-white font-bold text-xl mb-3">
              DiurieFit Black é seguro para consumo, é dispensado pela ANVISA
            </h3>
            <p className="text-white text-sm mb-4">
              Após testes o DiurieFit Black foi 100% dispensado pela ANVISA (Agência de Vigilância Sanitária) e pelo Ministério da Saúde. Não oferece nenhum risco à saúde e não possui efeitos colaterais, seu consumo é totalmente seguro.
            </p>
            <div className="flex items-center">
              <div className="bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <img 
                  src="/lovable-uploads/8014ed2d-fe21-4a36-bf30-baf96c125ca3.png" 
                  alt="Anvisa logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <p className="text-white text-sm font-medium">
                Aprovado pelo Ministério da Saúde
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySection;
