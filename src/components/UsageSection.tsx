
import React from 'react';
import { scrollToElement } from '@/lib/scrollUtils';

const UsageSection = () => {
  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="bg-diurie-dark py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center px-4">
        {/* Super Garantia Section */}
        <div className="bg-diurie-dark text-white p-6 rounded-lg md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Acreditamos tanto no nosso produto que você terá a <span className="text-diurie-orange">Super Garantia</span> de 30 dias!
          </h3>
          <p className="mb-6 text-base">
            Risco Zero Para Você! Para provar, devolvemos o seu dinheiro se o produto não atender as expectativas. 
            Você terá até 30 dias após a compra para solicitar a devolução do seu dinheiro, simples assim!
          </p>
          <a 
            href="#comprar" 
            className="cta-button bg-[#36B536] inline-block w-full py-4 text-center text-lg font-bold"
            onClick={handleScrollToComprar}
          >
            QUERO MEU DIURIEFIT
          </a>
        </div>
        
        {/* Product Image */}
        <div className="flex items-center justify-center md:w-1/2">
          <img 
            src="/lovable-uploads/775eea19-1584-494f-99bb-257793684dee.png" 
            alt="DiurieFit Black com garantia de 30 dias" 
            className="max-w-full h-auto max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default UsageSection;
