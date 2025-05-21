
import { useState } from "react";

const IngredientsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const ingredientGroups = [
    [
      {
        name: "Colágeno Hidrolisado",
        description: "É essencial para manter a elasticidade da pele e a saúde das articulações. Além disso, sua ingestão pode ajudar a promover a sensação de saciedade.",
        image: "/lovable-uploads/b0bf636b-9950-4958-9209-85a03b7ed845.png"
      },
      {
        name: "Carqueja",
        description: "A Carqueja é conhecida por suas propriedades digestivas e diuréticas, ajudando a promover a eliminação de toxinas e líquidos retidos no corpo.",
        image: "/lovable-uploads/749ef806-8346-4dc4-b0c5-3579557ce5ce.png"
      },
      {
        name: "Picolinado de Cromo",
        description: "É um mineral essencial que ajuda a regular os níveis de glicose no sangue, reduzindo os picos de açúcar e controlando o apetite.",
        image: "/lovable-uploads/795c14bd-4b56-4ec2-8a24-f12d4f0476a5.png"
      }
    ],
    [
      {
        name: "Chá Verde",
        description: "É uma poderosa fonte de antioxidantes que ajudam a impulsionar o metabolismo e a queima de gordura.",
        image: "/lovable-uploads/e98d565f-2ea7-4eeb-ac87-608088d42b08.png"
      },
      {
        name: "Chá Preto",
        description: "É conhecido por sua capacidade de aumentar a energia e melhorar o foco. Seus antioxidantes promovem a saúde cardiovascular e ajudam na queima de gordura.",
        image: "/lovable-uploads/c539cd57-7a9f-4de8-bc55-2ceb8f8725cf.png"
      },
      {
        name: "Chá de Hibisco",
        description: "O Chá de Hibisco é reconhecido por suas propriedades diuréticas naturais, que ajudam a reduzir a retenção de líquidos e o inchaço.",
        image: "/lovable-uploads/b1f1f9e5-735d-47fb-9015-eed4960755a2.png"
      }
    ],
    [
      {
        name: "Inulina",
        description: "É uma fibra prebiótica que promove o crescimento de bactérias benéficas no intestino, melhorando a saúde digestiva e auxiliando na absorção de nutrientes.",
        image: "/lovable-uploads/8fae3c7b-40b2-4048-b58a-ada0a7b3d8e9.png"
      },
      {
        name: "Chá Verde",
        description: "É uma poderosa fonte de antioxidantes que ajudam a impulsionar o metabolismo e a queima de gordura.",
        image: "/lovable-uploads/e98d565f-2ea7-4eeb-ac87-608088d42b08.png"
      },
      {
        name: "Chá Preto",
        description: "É conhecido por sua capacidade de aumentar a energia e melhorar o foco. Seus antioxidantes promovem a saúde cardiovascular e ajudam na queima de gordura.",
        image: "/lovable-uploads/c539cd57-7a9f-4de8-bc55-2ceb8f8725cf.png"
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
                  src="/lovable-uploads/d2bd21e2-e01e-42ac-a91e-74960dc85eb4.png" 
                  alt="DiurieFit logo" 
                  className="w-16 mt-4 opacity-75 mx-auto"
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
