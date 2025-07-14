import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FooterSection = () => {
  return (
    <footer className="bg-diurie-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h3 className="text-diurie-orange text-xl font-bold mb-4">DiurieFit Black</h3>
          <p className="text-gray-300 mb-6">
            Suplemento alimentar com ingredientes naturais selecionados
          </p>
          
          <Separator className="bg-gray-600 mb-6" />
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 DiurieFit. Todos os direitos reservados.</p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-diurie-orange hover:text-white underline">
                  Política de Privacidade
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Política de Privacidade — Diurie Fit</DialogTitle>
                </DialogHeader>
                <div className="text-sm space-y-4">
                  <p>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações no site Diurie Fit (https://www.diuriefit.com ou outra URL oficial).</p>
                  
                  <h3 className="font-semibold text-base">1. Coleta de Informações</h3>
                  <p>Coletamos dados pessoais e informações de navegação quando você interage com nosso site. As informações que podemos coletar incluem:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nome, e-mail e telefone (quando fornecidos voluntariamente em formulários)</li>
                    <li>Endereço IP</li>
                    <li>Navegador e dispositivo utilizado</li>
                    <li>Páginas visitadas e tempo de navegação</li>
                  </ul>

                  <h3 className="font-semibold text-base">2. Uso do Google Analytics</h3>
                  <p>Utilizamos o Google Analytics para entender como os visitantes interagem com nosso site. O Google Analytics coleta cookies e dados de navegação para fornecer estatísticas e relatórios. Essas informações são usadas apenas para melhorar a experiência do usuário e o desempenho da nossa plataforma.</p>
                  <p>Você pode desativar a coleta de dados pelo Google Analytics acessando: https://tools.google.com/dlpage/gaoptout</p>

                  <h3 className="font-semibold text-base">3. Uso das Informações</h3>
                  <p>As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Melhorar a navegação e o conteúdo do site</li>
                    <li>Oferecer conteúdos e produtos mais relevantes</li>
                    <li>Enviar comunicações (quando autorizado)</li>
                    <li>Garantir segurança e integridade da plataforma</li>
                  </ul>

                  <h3 className="font-semibold text-base">4. Compartilhamento de Dados</h3>
                  <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Com prestadores de serviço essenciais (como ferramentas de e-mail ou hospedagem)</li>
                    <li>Quando exigido por lei ou autoridades legais</li>
                  </ul>

                  <h3 className="font-semibold text-base">5. Cookies</h3>
                  <p>Cookies são arquivos armazenados no seu navegador para reconhecimento e desempenho. Você pode desativar os cookies nas configurações do navegador, mas isso pode limitar funcionalidades do site.</p>

                  <h3 className="font-semibold text-base">6. Segurança dos Dados</h3>
                  <p>Adotamos medidas de segurança técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, perda, alteração ou destruição.</p>

                  <h3 className="font-semibold text-base">7. Seus Direitos (Conforme a LGPD)</h3>
                  <p>Você pode a qualquer momento:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Acessar os dados que temos sobre você</li>
                    <li>Solicitar correções</li>
                    <li>Revogar consentimentos</li>
                    <li>Solicitar a exclusão de seus dados</li>
                  </ul>
                  <p>Para exercer seus direitos, entre em contato pelo e-mail: contato@diuriefit.com (ou outro canal oficial).</p>

                  <h3 className="font-semibold text-base">8. Alterações na Política</h3>
                  <p>Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente.</p>

                  <p className="font-semibold">Última atualização: 11 de julho de 2025</p>
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