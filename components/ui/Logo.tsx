import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className=" flex items-center">
      <Image
        src="/logo.svg"
        width={35}
        height={35}
        alt="logo"
        className=" rounded-lg"
      />
      <h1 className=" ml-2 lg:text-3xl md:text-2xl text-xl font-semibold">
        Poststrome
      </h1>
    </Link>
  );
};

export default Logo;
