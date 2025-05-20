
const FooterSection = () => {
  return (
    <footer className="bg-diurie-dark text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Diurie
              <span className="block text-diurie-orange">Fit Black</span>
            </h2>
          </div>
          <div>
            <p className="text-xs uppercase mb-2">FORMAS DE PAGAMENTO:</p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase mb-2">SITE SEGURO:</p>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />
        
        <div className="text-xs text-gray-400 text-center">
          <p className="mb-2">
            "This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, INC."
          </p>
          <p className="mb-2">
            COPYRIGHT © DIUREFIT BLACK | TODOS OS DIREITOS RESERVADOS.
          </p>
          <p>
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veiculados são de propriedade exclusiva da empresa. É vetada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado será responsabilidade de quem a fizer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
