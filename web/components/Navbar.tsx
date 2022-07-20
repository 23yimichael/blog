import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center sticky top-0 z-50 bg-white p-12 space-x-8 ">
      <Link href="/">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          Home
        </div>
      </Link>
      <Link href="/music">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          Music
        </div>
      </Link>
      <Link href="/filmtv">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          Film/TV
        </div>
      </Link>
      <Link href="/about-us">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          About Us
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
