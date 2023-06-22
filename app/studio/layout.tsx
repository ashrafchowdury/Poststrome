import StudioContextProvider from "@/context/StudioContext";
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="xl:w-[1200px] lg:w-[1000px] md:w-[720px] sm:w-[500px] w-[95%] mx-auto h-screen overflow-hidden">
      <StudioContextProvider>{children}</StudioContextProvider>
    </section>
  );
}
