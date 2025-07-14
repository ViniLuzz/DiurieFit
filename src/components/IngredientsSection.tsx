import { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { scrollToElement } from "@/lib/scrollUtils";

const IngredientsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const ingredientGroups = [
    [
      { image: "/lovable-uploads/348e593d-5c91-4a45-9303-11bf19e62e44.png", name: "Hibisco" },
      { image: "/lovable-uploads/d357184a-d04d-4bf0-9396-76992918f67c.png", name: "Chá Verde" },
      { image: "/lovable-uploads/304e06ee-5b8e-4d64-8333-af7537a9d203.png", name: "Carqueja" },
    ],
    [
      { image: "/lovable-uploads/6418066e-e575-491b-8250-89e1c20a30af.png", name: "Sálvia" },
      { image: "/lovable-uploads/bbab9725-2fcf-4f9a-8b26-8fbd145d40ca.png", name: "Boldo" },
      { image: "/lovable-uploads/344e452f-4c9f-4c07-a755-6454c3e4dc87.png", name: "Centelha Asiática" },
    ],
    [
      { image: "/lovable-uploads/c539cd57-7a9f-4de8-bc55-2ceb8f8725cf.png", name: "Espinheira Santa" },
      { image: "/lovable-uploads/263a93b2-7a88-48d4-bca6-95c4a5c6a62e.png", name: "Cavalinha" },
      { image: "/lovable-uploads/a5a8d58a-023c-422a-b5de-ebb95803e03f.png", name: "Uva Ursi" },
    ]
  ];

  const handleScrollToComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('comprar');
  };

  return (
    <div className="bg-diurie-dark py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Ingredientes <span className="text-diurie-orange">Naturais</span> Selecionados
        </h2>
        <p className="text-white mb-12">
          Conheça alguns dos principais ingredientes que compõem nossa fórmula
        </p>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {ingredientGroups.map((group, groupIndex) => (
                <CarouselItem key={groupIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
                    {group.map((ingredient, index) => (
                      <div key={index} className="ingredient-card">
                        <AspectRatio ratio={1} className="mb-4">
                          <img
                            src={ingredient.image}
                            alt={ingredient.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </AspectRatio>
                        <h3 className="text-diurie-orange font-bold text-lg">
                          {ingredient.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-12">
          <a 
            href="#comprar" 
            className="cta-button bg-[#36B536] inline-block w-full md:w-auto btn-tem-interesse"
            onClick={handleScrollToComprar}
          >
            QUERO COMPRAR AGORA
          </a>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;