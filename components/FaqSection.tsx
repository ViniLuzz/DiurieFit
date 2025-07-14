import React from 'react';
import { scrollToElement } from '@/lib/scrollUtils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como devo tomar o DiurieFit Black?",
      answer: "Misture 1 colher (5g) em 200ml de água gelada. Tome 1 vez ao dia, preferencialmente pela manhã."
    },
    {
      question: "Quando vou ver os primeiros resultados?",
      answer: "Os resultados podem variar de pessoa para pessoa. Alguns usuários relatam mudanças nas primeiras semanas de uso."
    },
    {
      question: "Tem contraindicação?",
      answer: "Não recomendado para gestantes, lactantes e menores de 18 anos. Consulte um médico antes de usar."
    },
    {
      question: "Por quanto tempo devo tomar?",
      answer: "Para melhores resultados, recomendamos o uso contínuo por pelo menos 3 meses."
    }
  ];

  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-diurie-dark text-2xl md:text-3xl font-bold mb-12">
          Perguntas <span className="text-diurie-orange">Frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="w-full mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold text-diurie-dark py-4 hover:text-diurie-orange">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center">
          <a 
            href="#comprar" 
            className="cta-button bg-[#36B536] inline-block w-full md:w-auto btn-tem-interesse"
            onClick={handleScrollToComprar}
          >
            QUERO EXPERIMENTAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;