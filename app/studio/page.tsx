import Features from "@/components/studio/Features";
import Navigation from "@/components/studio/Navigation";
import Media from "@/components/studio/Media";

const Studio = () => {
  return (
    <main className="w-full overflow-hidden relative">
      <div className="bgDesign absolute -z-50 top-[-400px] lg:w-[800px] lg:h-[800px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[400px] w-[90%] h-[400px] rounded-full"></div>
      <Navigation />

      <section className="w-full lg:h-[85vh] sm:h-[70vh] h-[65vh] flex items-center lg:justify-between justify-center">
        <Features />
        <Media />
      </section>
    </main>
  );
};

export default Studio;
