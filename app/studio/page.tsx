import Features from "@/components/studio/Features";
import Navigation from "@/components/studio/Navigation";
import Preview from "@/components/studio/Preview";

const Studio = () => {
  return (
    <main className="w-full">
      <Navigation />

      <section className="w-full h-[80vh] flex items-center justify-between">
        <Features />
        <Preview />
      </section>
    </main>
  );
};

export default Studio;
