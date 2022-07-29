import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Context from "../utils/context";

const Navbar = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center sticky top-0 z-50 bg-white p-12 space-x-8 ">
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
      <Link href="/film-tv">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          Film/TV
        </div>
      </Link>
      <Link href="/about-us">
        <div className="font-poppins hover:cursor-pointer duration-500 hover:text-gray">
          About Us
        </div>
      </Link>
      {user ? (
        <Link href="/create">
          <div className="hover:cursor-pointer duration-500 bg-teal-500 hover:bg-teal-300 px-4 py-2 rounded-lg shadow-lg">
            <div className="font-poppins  text-white">Create</div>
          </div>
        </Link>
      ) : null}
      {user ? (
        <div
          onClick={() => {
            localStorage.removeItem("user");
            setUser(null);
            router.reload();
          }}
          className="hover:cursor-pointer duration-500 bg-red-500 hover:bg-red-300 px-4 py-2 rounded-lg shadow-lg"
        >
          <div className="font-poppins  text-white ">Logout</div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
