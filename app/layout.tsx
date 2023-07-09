import "./globals.css";
import { Noto_Sans } from "next/font/google";
const notoFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Transform Your Repositories with Stunning Images",
  description:
    "Take your repositories to the next level with professional and customizable images. Get noticed, increase engagement, and leave a lasting impression on fellow developers",
  keywords: [
    "repository",
    "repository preview",
    "github images",
    "custom repository images",
  ],
  openGraph: {
    title: "Transform Your Repositories with Stunning Images",
    description:
      "Take your repositories to the next level with professional and customizable images. ",
    siteName: "poststrome",
    url: "https://poststrome.vercel.app/",
    theme: "dark",
    images: [
      {
        url: "https://cloud.appwrite.io/v1/storage/buckets/647f538eb065d9f2b8d8/files/64aa7e2857a4f3309baf/view?project=645dc450a76ad06dddca&mode=admin",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoFont.className} w-full text-white`}>
        <div className="fixed -z-40 top-0 left-0 right-0 bottom-0 bg-transparent"></div>
        {children}
      </body>
    </html>
  );
}
