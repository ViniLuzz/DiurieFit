
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
            CNPJ: 55.120.600/0001-85
          </p>
          <p className="mb-2">
            COPYRIGHT © DIUREFIT BLACK | TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="mb-2">
            Este produto não substitui medicamentos e seus efeitos podem variar conforme o organismo. Resultados podem variar de pessoa para pessoa.
          </p>
          <p className="mb-4">
            Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veiculados são de propriedade exclusiva da empresa. É vetada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado será responsabilidade de quem a fizer.
          </p>
          <div className="mt-4">
            <Dialog>
              <DialogTrigger className="text-diurie-orange hover:text-diurie-orange/80 underline text-xs">
                Política de Privacidade
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Política de Privacidade — Diurie Fit</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm">
                  <p>
                    A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações no site Diurie Fit (https://www.diuriefit.com ou outra URL oficial).
                  </p>

                  <h3 className="font-bold">1. Coleta de Informações</h3>
                  <p>
                    Coletamos dados pessoais e informações de navegação quando você interage com nosso site. As informações que podemos coletar incluem:
                  </p>
                  <ul className="list-disc pl-4">
                    <li>Nome, e-mail e telefone (quando fornecidos voluntariamente em formulários)</li>
                    <li>Endereço IP</li>
                    <li>Navegador e dispositivo utilizado</li>
                    <li>Páginas visitadas e tempo de navegação</li>
                  </ul>

                  <h3 className="font-bold">2. Uso do Google Analytics</h3>
                  <p>
                    Utilizamos o Google Analytics para entender como os visitantes interagem com nosso site. O Google Analytics coleta cookies e dados de navegação para fornecer estatísticas e relatórios. Essas informações são usadas apenas para melhorar a experiência do usuário e o desempenho da nossa plataforma.
                  </p>
                  <p>
                    Você pode desativar a coleta de dados pelo Google Analytics acessando: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">https://tools.google.com/dlpage/gaoptout</a>
                  </p>

                  <h3 className="font-bold">3. Uso das Informações</h3>
                  <p>As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc pl-4">
                    <li>Melhorar a navegação e o conteúdo do site</li>
                    <li>Oferecer conteúdos e produtos mais relevantes</li>
                    <li>Enviar comunicações (quando autorizado)</li>
                    <li>Garantir segurança e integridade da plataforma</li>
                  </ul>

                  <h3 className="font-bold">4. Compartilhamento de Dados</h3>
                  <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>
                  <ul className="list-disc pl-4">
                    <li>Com prestadores de serviço essenciais (como ferramentas de e-mail ou hospedagem)</li>
                    <li>Quando exigido por lei ou autoridades legais</li>
                  </ul>

                  <h3 className="font-bold">5. Cookies</h3>
                  <p>
                    Cookies são arquivos armazenados no seu navegador para reconhecimento e desempenho. Você pode desativar os cookies nas configurações do navegador, mas isso pode limitar funcionalidades do site.
                  </p>

                  <h3 className="font-bold">6. Segurança dos Dados</h3>
                  <p>
                    Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição.
                  </p>

                  <h3 className="font-bold">7. Seus Direitos (Conforme a LGPD)</h3>
                  <p>Você pode a qualquer momento:</p>
                  <ul className="list-disc pl-4">
                    <li>Acessar os dados que temos sobre você</li>
                    <li>Solicitar correções</li>
                    <li>Revogar consentimentos</li>
                    <li>Solicitar a exclusão de seus dados</li>
                  </ul>
                  <p>
                    Para exercer seus direitos, entre em contato pelo e-mail: contato@diuriefit.com (ou outro canal oficial).
                  </p>

                  <h3 className="font-bold">8. Alterações na Política</h3>
                  <p>
                    Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente.
                  </p>
                  
                  <p className="font-semibold">
                    Última atualização: 11 de julho de 2025
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
