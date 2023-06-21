import Features from "@/components/studio/Features";
import Navigation from "@/components/studio/Navigation";
import Media from "@/components/studio/Media";

const Studio = () => {
  return (
    <main className="w-full overflow-hidden">
      <div className="bgDesign absolute -z-50 top-[-400px] w-[800px] h-[800px] rounded-full"></div>
      <Navigation />

      <section className="w-full h-[80vh] flex items-center justify-between">
        <Features />
        <Media />
      </section>
    </main>
  );
};

export default Studio;
