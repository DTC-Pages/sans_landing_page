import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Features from './components/Features';
import VerdictTitle from './components/VerdictTitle';
import ProductDetailCard from './components/ProductDetailCard';
import ProductReviewList from './components/ProductReviewList';
import WinnerSection from './components/WinnerSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-9 lg:py-12">
        <div className="hidden lg:grid lg:grid-cols-[1fr_320px] lg:gap-10 lg:items-start">
          <div className="flex flex-col">
            <Hero />
            <Features />
            <VerdictTitle />
            <ProductDetailCard />
            <ProductReviewList />
            <WinnerSection />
          </div>
          
          <div className="sticky top-5">
            <ProductCard />
          </div>
        </div>
        <div className="lg:hidden flex flex-col">
          <Hero />
          <ProductCard />
          <Features />
          <VerdictTitle />
          <ProductDetailCard />
          <ProductReviewList />
          <WinnerSection />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
