
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const IngredientsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const ingredientGroups = [
    [
      {
        name: "Colágeno Hidrolisado",
        image: "/lovable-uploads/95356d88-cdee-4653-8ff0-3f8c17d435c4.png",
        description: "Proteína estrutural que promove a saúde da pele, cabelos e unhas. Também contribui para a sensação de saciedade."
      },
      {
        name: "Carqueja",
        image: "/lovable-uploads/c4224c25-214b-420e-9033-0536ffabae8c.png",
        description: "Planta medicinal conhecida por suas propriedades digestivas e desintoxicantes. Auxiliar na perda de peso."
      },
      {
        name: "Picolinado de Cromo",
        image: "/lovable-uploads/d357184a-d04d-4bf0-9396-76992918f67c.png",
        description: "Mineral essencial que ajuda a regular o metabolismo da glicose e reduzir a compulsão por doces."
      }
    ],
    [
      {
        name: "Chá Verde",
        image: "/lovable-uploads/304e06ee-5b8e-4d64-8333-af7537a9d203.png",
        description: "Rico em antioxidantes e catequinas que aceleram o metabolismo e promovem a queima de gordura corporal."
      },
      {
        name: "Chá Preto",
        image: "/lovable-uploads/fa3286b6-0f29-4fa1-a82d-8622dffb950d.png",
        description: "É conhecido por sua capacidade de aumentar a energia e melhorar o foco. Seus antioxidantes promovem a saúde cardiovascular e ajudam na queima de gordura."
      },
      {
        name: "Chá de Hibisco",
        image: "/lovable-uploads/6bae562b-e9e6-4a4b-8951-e399ff0810ea.png",
        description: "Flor com propriedades diuréticas e antioxidantes. Ajuda a reduzir a retenção de líquidos e controlar a pressão arterial."
      }
    ],
    [
      {
        name: "Inulina",
        image: "/lovable-uploads/344e452f-4c9f-4c07-a755-6454c3e4dc87.png",
        description: "É uma fibra prebiótica que promove o crescimento de bactérias benéficas no intestino, melhorando a saúde digestiva e auxiliando na absorção de nutrientes."
      }
    ]
  ];

  // Function to handle carousel nav
  const handleSlideChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="bg-diurie-orange py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-white text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          O segredo da mais poderosa e avançada
        </h2>
        <h3 className="text-diurie-dark text-center text-2xl md:text-3xl font-bold mb-12">
          bebida emagrecedora do Brasil
        </h3>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {ingredientGroups[activeTab].map((ingredient, index) => (
              <div key={index} className="ingredient-card flex flex-col items-center">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h4 className="font-bold text-center text-xl mb-3">{ingredient.name}</h4>
                <p className="text-center text-sm">{ingredient.description}</p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-10">
            {ingredientGroups.map((_, index) => (
              <button 
                key={index} 
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeTab ? 'bg-diurie-dark scale-125' : 'bg-white'}`}
                aria-label={`View ingredient page ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center">
            <a href="#comprar" className="cta-button inline-block px-10 py-4 text-xl">
              QUERO COMPRAR AGORA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;
