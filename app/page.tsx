import Link from "next/link";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  StarsIcon,
  TwitterIcon,
} from "@/components/ui/Icons";
import Logo from "@/components/ui/Logo";

export default function Home() {
  return (
    <main className="xl:w-[1250px] lg:w-[1020px] md:w-[750px] sm:w-[550px] w-[95%] mx-auto overflow-hidden">
      <div className="bgDesign absolute -z-50 top-[-400px] w-[800px] h-[800px] rounded-full"></div>
      <nav className=" w-full md:h-[120px] h-[100px] flex items-center justify-between">
        <Logo />
        <Link href="/studio">
          <button className="glass md:text-sm text-xs px-7 py-3 rounded-full font-semibold flex items-center">
            <StarsIcon style="mr-2 text-[16px]" /> Open Studio
          </button>
        </Link>
      </nav>

      <header className=" relative flex flex-col items-center mt-28">
        <div className="lg:w-[650px] md:w-[80%] w-[90%] text-center">
          <h1 className="heading lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] font-bold">
            Shine Your Post To The World
          </h1>
          <p className=" lg:text-lg md:text-[16px] text-sm w-[80%] mx-auto font-light mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            illum, voluptates illo quis sunt qui.
          </p>
        </div>
        <Link href="/studio">
          <button className="glass md:text-sm text-xs px-7 py-3 rounded-full font-semibold flex items-center mt-8">
            <StarsIcon style="mr-2 text-[16px]" /> Open Studio
          </button>
        </Link>

        <div className=" absolute top-[270px] -z-50 flex flex-col items-center justify-center">
          <div className=" bg-slate-400 mt-16 w-[560px] h-[2px] rounded-lg"></div>
          <Image
            src="/light.svg"
            width={1000}
            height={1000}
            alt="logo"
            className=" opacity-90"
          />
        </div>
      </header>

      <section className="mt-[240px] flex items-center justify-center">
        <div className="w-[950px] flex flex-wrap items-center justify-center">
          <div className="glass xl:w-[400px] xl:h-[400px] lg:w-[330px] lg:h-[330px] rounded-2xl m-2 p-4 overflow-hidden"></div>
          <div className="glass xl:w-[400px] xl:h-[400px] lg:w-[330px] lg:h-[330px] rounded-2xl m-2 p-4 overflow-hidden"></div>
          <div className="glass xl:w-[820px] xl:h-[400px] lg:w-[680px] lg:h-[330px] rounded-2xl m-2 p-4 overflow-hidden"></div>
        </div>

        <div className="glass xl:w-[450px] xl:h-[815px] lg:w-[400px] lg:h-[680px] rounded-2xl m-2 p-4 overflow-hidden"></div>
      </section>

      <footer className=" mt-28">
        <div className="glass w-full h-[2px] my-10"></div>

        <div className=" w-full flex md:flex-row flex-col md:items-start items-center justify-between mb-5">
          <div>
            <Link href="/" target="_blank">
              Desigend & developed by
              <span className="ml-1 whitespace-nowrap underline underline-offset-[6px] decoration-1 decoration-wavy decoration-secondary">
                Ashraf Chowdury
              </span>
            </Link>
          </div>

          <div className=" flex items-center space-x-3 -mt-2">
            <button className="glass p-2 rounded-lg text-xl">
              <GithubIcon />
            </button>
            <button className="glass p-2 rounded-lg text-xl">
              <TwitterIcon />
            </button>
            <button className="glass p-2 rounded-lg text-xl">
              <LinkedinIcon />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
