import StudioContextProvider from "@/context/StudioContext";
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="xl:w-[1200px] mx-auto h-screen overflow-hidden">
      <StudioContextProvider>{children}</StudioContextProvider>
    </section>
  );
}
