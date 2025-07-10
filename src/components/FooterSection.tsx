
import { Separator } from "@/components/ui/separator";

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

          <div className="mb-6 md:mb-0">
            <p className="text-xs uppercase mb-2 text-center">FORMAS DE PAGAMENTO:</p>
            <div className="flex flex-wrap justify-center gap-2">
              <img 
                src="/lovable-uploads/bbab9725-2fcf-4f9a-8b26-8fbd145d40ca.png" 
                alt="Métodos de pagamento" 
                className="h-auto w-full max-w-md"
              />
            </div>
          </div>
          
          <div>
            <p className="text-xs uppercase mb-2 text-center">SITE SEGURO:</p>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/09342655-4284-45a5-be02-7888af2870af.png" 
                alt="Site seguro" 
                className="h-auto w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 my-6" />
        
        <div className="text-xs text-gray-400 text-center">
          <p className="mb-2">
            "This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, INC."
          </p>
          <p className="mb-2">
            CNPJ: 55.120.600/0001-85
          </p>
          <p className="mb-2">
            COPYRIGHT © DIUREFIT BLACK | TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="mb-2">
            Este produto não substitui medicamentos e seus efeitos podem variar conforme o organismo. Resultados podem variar de pessoa para pessoa.
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
