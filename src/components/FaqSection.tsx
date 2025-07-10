
import React from "react";
import { Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { scrollToElement } from "@/lib/scrollUtils";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como funciona o DiurieFit Black?",
      answer: "É um suplemento com ingredientes naturais que auxilia no equilíbrio corporal, apoia a limpeza natural do organismo e contribui para o bem-estar.",
    },
    {
      question: "Possui algum efeito colateral, ou contra indicação?",
      answer: "Não possui efeitos colaterais conhecidos. No entanto, gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de usar o produto.",
    },
    {
      question: "Como devo tomar o DiurieFit?",
      answer: "Diluir a quantidade de 1 colher (5g) em 200 ML de água ou outra bebida de sua preferência, mexer bem até dissolver completamente e consumir imediatamente. Consumir uma vez ao dia.",
    },
    {
      question: "DiurieFit é seguro?",
      answer: "SIM! Nosso produto é isento de registro conforme RDC ANVISA (Agência Nacional de Vigilância Sanitária), além de possuir 30 dias de garantia. Este suplemento não substitui tratamento médico. Resultados podem variar.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Prazo de entrega de 5 a 10 dias úteis para todo interior do RS, SP e MG. Demais estados de 10 até 15 dias.",
    },
  ];

  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="bg-diurie-orange py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Perguntas<br />Frequentes
          </h2>
          <div className="w-1/3 h-1 bg-white my-4"></div>
        </div>
        
        <div className="md:w-2/3">
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-0"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-t border-t-white/20 border-b-0 overflow-hidden last:border-b last:border-b-white/20"
              >
                <AccordionTrigger className="bg-diurie-dark text-white p-4 flex justify-between items-center w-full focus:no-underline hover:no-underline group">
                  <span className="font-medium text-left">{faq.question}</span>
                  <span className="shrink-0 transition-transform duration-300">
                    <Plus className="h-5 w-5 group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 hidden group-data-[state=open]:block" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-diurie-dark p-4 text-white data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-10">
            <a 
              href="#comprar" 
              className="cta-button inline-block px-10"
              onClick={handleScrollToComprar}
            >
              QUERO EXPERIMENTAR AGORA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
