
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScroll && "bg-gray-300"}`}>
      <div className="justify-between w-full lg:flex  md:flex ">
        <div className="flex items-center justify-between  md:block">
          <Link href="/">
          <a>
            <img
              className="scale-100 hover:scale-150 ease-in duration-500"
              src="http://localhost/giantland/uploads/1642331307.png"
              alt=""
              width={150}
              height={150}
            />
          </a>
          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <AiOutlineClose className="h-6 w-6 font-light text-gray-900" />
              ) : (
                <AiOutlineMenu className="h-6 w-6 font-light text-gray-900" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className={`items-center md:px-8 space-y-4 md:flex md:space-x-4 md:space-y-0`}>
            <li className={`headerLink`}>
              <Link href="/">
              <a>Home</a>
              </Link>
            </li>
            <li className="headerLink">
              <Link href="/pricing">
                 <a>Pricing</a>
              </Link>             
            </li>
             <li className="headerLink">
              <Link href="/frequently">
                 <a>Frequently</a>
              </Link>             
            </li>
          </ul>
        </div>
        <div
          className={`md:space-x-3 md:inline-block ${
            navbar ? "block" : "hidden"
          }`}
        >
          <Link href="/login" >
          <a className="inline-block w-full md:w-28  px-4 py-1 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100 "
          >
            Sign in
            </a>
          </Link>
          <Link href="/signup">
          <a
            className="inline-block w-full mt-3 md:mt-0 md:w-32 px-4 py-1 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
