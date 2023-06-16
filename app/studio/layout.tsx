import StudioContextProvider from "@/context/StudioContext";
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-[80%] mx-auto h-screen overflow-hidden">
      <StudioContextProvider>{children}</StudioContextProvider>
    </section>
  );
}
