
import { useState } from "react";
import { ArrowDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggle }: FaqItemProps) => {
  return (
    <div className="mb-4">
      <button
        className={`w-full text-left p-4 flex justify-between items-center text-white ${
          isOpen ? "bg-diurie-dark" : "bg-diurie-orange"
        }`}
        onClick={toggle}
      >
        <span className="font-medium">{question}</span>
        <ArrowDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="bg-diurie-orange p-4 text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "Como funciona o DiurieFit Black?",
      answer: "É uma bebida emagrecedora com efeito DIURÉTICO que estimula a limpeza e desintoxicação do organismo e fortalece o sistema imunológico.",
    },
    {
      question: "Como devo tomar o DiurieFit?",
      answer: "Diluir a quantidade de 1 colher (5g) em 200 ML de água ou outra bebida de sua preferência, mexer bem até dissolver completamente e consumir imediatamente. Consumir uma vez ao dia.",
    },
    {
      question: "DiurieFit é seguro?",
      answer: "SIM! Nosso produto foi testado e dispensado pela ANVISA (Agência Nacional de Vigilância Sanitária), além de possuir, 30 dias de garantia.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Prazo de entrega de 5 a 10 dias úteis para todo interior do RS, SP e MG. Demais estados de 10 até 15 dias.",
    },
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-diurie-orange py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-white text-center text-2xl md:text-3xl font-bold mb-2">
          Perguntas Frequentes
        </h2>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#comprar" className="cta-button inline-block px-10">
            QUERO EXPERIMENTAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
