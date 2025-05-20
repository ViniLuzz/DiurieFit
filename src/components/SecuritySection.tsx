
const SecuritySection = () => {
  return (
    <div className="bg-diurie-yellow py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Veja como é rápido e fácil comprar seu <span className="text-diurie-orange">DiurieFit Black</span>
        </h2>
        <p className="text-center text-lg mb-12">
          Comprar DiurieFit Black é fácil, prático e totalmente seguro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-diurie-orange rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 className="text-diurie-dark font-bold text-lg mb-3">Dados Pessoais</h3>
            <p className="text-center text-sm text-gray-600">
              São totalmente sigilosos e não são compartilhados.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-diurie-orange rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-diurie-dark font-bold text-lg mb-3">Site Confiável</h3>
            <p className="text-center text-sm text-gray-600">
              Monitorado todo o tempo por empresas de segurança digital.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-diurie-orange rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-diurie-dark font-bold text-lg mb-3">Dados Financeiros</h3>
            <p className="text-center text-sm text-gray-600">
              Gravados em ambiente 100% seguro.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-diurie-orange rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
              </svg>
            </div>
            <h3 className="text-diurie-dark font-bold text-lg mb-3">Entrega Garantida</h3>
            <p className="text-center text-sm text-gray-600">
              Logística eficaz com entregas feitas no prazo combinado.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#comprar" className="cta-button inline-block px-10 py-4 text-xl">
            QUERO COMPRAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
