import Link from "next/link";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  StarsIcon,
  TwitterIcon,
  ColorImageIcon,
  ColorFlashIcon,
  ColorFolderIcon,
} from "@/components/ui/Icons";
import { Logo } from "@/components";

export default function Home() {
  return (
    <main className="xl:w-[1250px] lg:w-[1020px] md:w-[750px] sm:w-[550px] w-[95%] mx-auto relative overflow-x-hidden">
      <div className="bgDesign absolute -z-50 top-[-400px] lg:w-[800px] lg:h-[800px] md:w-[600px] md:h-[600px] sm:w-[400px] sm:h-[400px] w-[90%] h-[400px] rounded-full"></div>
      <nav className=" w-full md:h-[120px] h-[100px] flex items-center justify-between">
        <Logo />
        <Link href="/studio">
          <button className="glass md:text-sm text-xs md:px-7 py-3 px-5 rounded-full font-semibold flex items-center">
            <StarsIcon style="mr-2 md:text-[16px] text-sm" /> Open Studio
          </button>
        </Link>
      </nav>

      <header className=" relative flex flex-col items-center sm:mt-28 mt-20">
        <div className="lg:w-[650px] md:w-[80%] w-[90%] text-center">
          <h1 className="heading lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:leading-[70px] font-bold">
            Create Engaging Repository Visuals!
          </h1>
          <p className=" lg:text-lg md:text-[16px] text-sm w-[80%] mx-auto font-light mt-4">
            Enhance Repository Visibility and Engagement through Compelling
            Images and Tailored Templates.
          </p>
        </div>
        <Link href="/studio">
          <button className="glass md:text-sm text-xs md:px-7 py-3 px-5 rounded-full font-semibold flex items-center mt-8">
            <StarsIcon style="mr-2 md:text-[16px] text-sm" /> Open Studio
          </button>
        </Link>

        <div className="  absolute sm:top-[270px] top-[220px] -z-50 flex flex-col items-center justify-center">
          <div className=" bg-slate-400 mt-16 lg:w-[560px] md:w-[420px] sm:w-[300px] w-[55%] h-[2px] rounded-lg"></div>
          <Image
            src="/light.svg"
            width={1000}
            height={1000}
            alt="logo"
            className=" opacity-90"
          />
        </div>
      </header>

      <section className="sm:mt-[180px] mt-[130px] mx-auto w-full flex lg:flex-row flex-col items-center justify-center">
        <div className="lg:w-[950px] md:w-[620px] sm:w-[450px] w-full flex lg:flex-row flex-col lg:flex-wrap ">
          <div className="glass xl:w-[400px] xl:h-[290px] lg:w-[330px] lg:h-[260px] w-full h-auto rounded-2xl sm:m-2 my-2 lg:p-10 p-8 overflow-hidden">
            <div className="glass xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8  flex items-center justify-center rounded-lg mb-4">
              <ColorImageIcon style="xl:text-3xl lg:text-[28px] md:text-2xl text-xl" />
            </div>
            <p className=" lg:text-xl md:text-lg text-[16px] font-bold md:mb-5 mb-3">
              Images
            </p>
            <p className="break-all md:text-sm text-xs">
              Generate public repository images with different templates and
              matrics with customization options. Then download or Copy it
              according to your need.
            </p>
          </div>
          <div className="glass xl:w-[400px] xl:h-[290px] lg:w-[330px] lg:h-[260px] w-full h-auto rounded-2xl sm:m-2 my-2 lg:p-10 p-8 overflow-hidden">
            <div className="glass xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8  flex items-center justify-center rounded-lg mb-4">
              <ColorFlashIcon style="xl:text-3xl lg:text-[28px] md:text-2xl text-xl" />
            </div>
            <p className=" lg:text-xl md:text-lg text-[16px] font-bold md:mb-5 mb-3">
              Customizations
            </p>
            <p className="break-all md:text-sm text-xs">
              Customize the repository image, change the background colour and
              shadows and choose different platforms to glorify it more, then
              download or copy it to share on different social media.
            </p>
          </div>

          <div className="glass hidden lg:flex items-center space-x-5 justify-center xl:w-[820px] xl:h-[290px] lg:w-[680px] lg:h-[260px] rounded-2xl m-2 lg:p-10 p-8 overflow-hidden">
            <img
              src="temp_two.png"
              className=" lg:w-[360px] md:w-[250px] w-full rounded-xl"
              alt="Template Image"
            />
            <img
              src="temp_three.png"
              className=" lg:w-[360px] md:w-[250px] w-full rounded-xl"
              alt="Template Image"
            />
            <img
              src="temp_one.png"
              className=" lg:w-[360px] md:w-[250px] w-full rounded-xl"
              alt="Template Image"
            />
          </div>
        </div>

        <div className="glass flex flex-col space-y-6 items-center xl:w-[450px] xl:h-[600px] lg:w-[420px] lg:h-[540px] md:w-[620px] sm:w-[450px] w-full h-auto rounded-2xl lg:m-2 my-2 lg:p-10 p-8 overflow-hidden">
          <div>
            <div className="glass xl:w-14 xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8  flex items-center justify-center rounded-lg mb-4">
              <ColorFolderIcon style="xl:text-3xl lg:text-[28px] md:text-2xl text-xl" />
            </div>
            <p className=" lg:text-xl md:text-lg text-[16px] font-bold md:mb-5 mb-3">
              Templates
            </p>
            <p className="break-all md:text-sm text-xs">
              Choose different templates and customize them according to your
              need, then download or copy them to share on social media to
              engage your users.
            </p>
          </div>
          <img
            src="temp_two.png"
            className="w-full rounded-xl"
            alt="templates"
          />
          <img
            src="temp_four.png"
            className="  w-full rounded-xl"
            alt="templates"
          />
        </div>
      </section>

      <footer className=" mt-28">
        <div className="glass w-full h-[2px] my-10"></div>

        <div className=" w-full flex md:flex-row flex-col md:items-start items-center justify-between mb-5">
          <div className=" md:mb-0 mb-10">
            <Link
              href="/"
              target="_blank"
              className="md:text-[16px] text-sm text-center block"
            >
              Desigend & developed by
              <span className="ml-1 whitespace-nowrap underline underline-offset-[6px] decoration-1 decoration-wavy decoration-secondary">
                Ashraf Chowdury
              </span>
            </Link>
          </div>

          <div className=" flex items-center space-x-3 -mt-2">
            <button className="glass p-2 rounded-lg lg:text-xl md:text-lg text-sm">
              <GithubIcon />
            </button>
            <button className="glass p-2 rounded-lg lg:text-xl md:text-lg text-sm">
              <TwitterIcon />
            </button>
            <button className="glass p-2 rounded-lg lg:text-xl md:text-lg text-sm">
              <LinkedinIcon />
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
