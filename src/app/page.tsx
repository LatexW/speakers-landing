import Hero from "@/components/Hero";
import FeaturedSpeakers from "@/components/FeaturedSpeakers";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-foreground">
      <Hero />
      <FeaturedSpeakers />
    </main>
  );
}
