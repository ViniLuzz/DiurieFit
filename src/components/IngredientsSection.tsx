
import { useState } from "react";

const IngredientsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const ingredientGroups = [
    [
      {
        name: "Colágeno Hidrolisado",
        description: "É essencial para manter a elasticidade da pele e a saúde das articulações. Além disso, sua ingestão pode ajudar a promover a sensação de saciedade.",
        image: "/lovable-uploads/a7f22349-cdbb-4ae5-a61a-b8d4f8a8f1f1.png"
      },
      {
        name: "Carqueja",
        description: "A Carqueja é conhecida por suas propriedades digestivas e diuréticas, ajudando a promover a eliminação de toxinas e líquidos retidos no corpo.",
        image: "/lovable-uploads/a7f22349-cdbb-4ae5-a61a-b8d4f8a8f1f1.png"
      },
      {
        name: "Picolinado de Cromo",
        description: "É um mineral essencial que ajuda a regular os níveis de glicose no sangue, reduzindo os picos de açúcar e controlando o apetite.",
        image: "/lovable-uploads/a7f22349-cdbb-4ae5-a61a-b8d4f8a8f1f1.png"
      }
    ],
    [
      {
        name: "Chá Verde",
        description: "É uma poderosa fonte de antioxidantes que ajudam a impulsionar o metabolismo e a queima de gordura.",
        image: "/lovable-uploads/9d4ddd43-ed25-4b71-b00a-57904edf4a26.png"
      },
      {
        name: "Chá Preto",
        description: "É conhecido por sua capacidade de aumentar a energia e melhorar o foco. Seus antioxidantes promovem a saúde cardiovascular e ajudam na queima de gordura.",
        image: "/lovable-uploads/9d4ddd43-ed25-4b71-b00a-57904edf4a26.png"
      },
      {
        name: "Chá de Hibisco",
        description: "O Chá de Hibisco é reconhecido por suas propriedades diuréticas naturais, que ajudam a reduzir a retenção de líquidos e o inchaço.",
        image: "/lovable-uploads/9d4ddd43-ed25-4b71-b00a-57904edf4a26.png"
      }
    ],
    [
      {
        name: "Inulina",
        description: "É uma fibra prebiótica que promove o crescimento de bactérias benéficas no intestino, melhorando a saúde digestiva e auxiliando na absorção de nutrientes.",
        image: "/lovable-uploads/348e593d-5c91-4a45-9303-11bf19e62e44.png"
      },
      {
        name: "Chá Verde",
        description: "É uma poderosa fonte de antioxidantes que ajudam a impulsionar o metabolismo e a queima de gordura.",
        image: "/lovable-uploads/348e593d-5c91-4a45-9303-11bf19e62e44.png"
      },
      {
        name: "Chá Preto",
        description: "É conhecido por sua capacidade de aumentar a energia e melhorar o foco. Seus antioxidantes promovem a saúde cardiovascular e ajudam na queima de gordura.",
        image: "/lovable-uploads/348e593d-5c91-4a45-9303-11bf19e62e44.png"
      }
    ]
  ];

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
              <div key={index} className="ingredient-card">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white">
                  <img 
                    src={ingredient.image} 
                    alt={ingredient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-diurie-dark font-bold text-xl mb-3 text-center">{ingredient.name}</h3>
                <p className="text-center text-sm text-gray-700">{ingredient.description}</p>
                <img 
                  src="/lovable-uploads/a7f22349-cdbb-4ae5-a61a-b8d4f8a8f1f1.png" 
                  alt="DiurieFit logo" 
                  className="w-16 mt-4 opacity-50"
                />
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mb-10">
            {ingredientGroups.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveTab(index)}
                className={`w-2 h-2 rounded-full ${index === activeTab ? 'bg-diurie-dark' : 'bg-white'}`}
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
