import Hero from "@/components/Hero";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";
import HowTo from "@/components/HowTo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-foreground">
      <Hero />
      <FeaturedSpeakers />
      <HowTo />
      <CTA />
      <Footer />
    </main>
  );
}
