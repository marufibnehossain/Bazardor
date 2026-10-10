import HeroBanner from "@/components/Home/HeroBanner";
import ProductSections from "@/components/Home/ProductSections";

export default async function Home() {
  return (
    <div className="px-[5vw] lg:py-14 py-8">
      <div className="max-w-7xl mx-auto">
        <HeroBanner />
        <ProductSections />
      </div>
    </div>
  );
}
