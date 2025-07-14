import Head from 'next/head';
import { GetServerSideProps } from 'next';

// Importar componentes (vamos migrar um por um)
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import IngredientsSection from '@/components/IngredientsSection';
import SafetySection from '@/components/SafetySection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SecuritySection from '@/components/SecuritySection';
import UsageSection from '@/components/UsageSection';
import FaqSection from '@/components/FaqSection';
import FooterSection from '@/components/FooterSection';

interface HomeProps {
  serverTime: string;
}

export default function Home({ serverTime }: HomeProps) {
  return (
    <>
      <Head>
        <title>DiurieFit Black - Desperte sua melhor versão!</title>
        <meta name="description" content="DiurieFit Black - Suplemento em pó com sabor de laranja 10x mais eficaz na queima de gordura e redução de inchaço." />
        <meta name="author" content="DiurieFit" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="DiurieFit Black - Desperte sua melhor versão!" />
        <meta property="og:description" content="Suplemento em pó com sabor de laranja 10x mais eficaz na queima de gordura e redução de inchaço." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/lovable-uploads/d62c7528-6a78-4b8a-8fc1-e562c4c386e8.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@diuriefit" />
        <meta name="twitter:image" content="/lovable-uploads/d62c7528-6a78-4b8a-8fc1-e562c4c386e8.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Debug SSR - remover depois */}
        <div className="fixed top-0 right-0 bg-black text-white p-2 text-xs z-50">
          SSR: {serverTime}
        </div>
        
        <main>
          <HeroSection />
          <BenefitsSection />
          <IngredientsSection />
          <SafetySection />
          <PricingSection />
          <TestimonialsSection />
          <SecuritySection />
          <UsageSection />
          <FaqSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}

// SSR Function - garante que a página é renderizada no servidor
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Inject server-side data to prove SSR is working
  const serverTime = new Date().toISOString();
  
  return {
    props: {
      serverTime,
    },
  };
};