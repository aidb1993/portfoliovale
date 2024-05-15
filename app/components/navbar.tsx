"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const handleNavigation = (url: string) => {
    router.push(url);
    setOpen(!open);
  };

  return (
    <div className="">
      <header className="flex justify-between content-center align-middle mt-2 mb-6 items-center">
        <Link
          href={"/"}
          className="text-center text-2xl font-bold cursor-pointer"
        >
          Valentina Ferreira Orduna
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-auto cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </header>
      {open && (
        <nav className="bg-gray-800 w-full h-full fixed top-0 left-0 z-10 flex flex-col justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x text-white cursor-pointer absolute top-4 right-4 w-10 h-10"
            onClick={() => setOpen(!open)}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <ul className="flex flex-col gap-14 justify-center justify-items-center text-center">
            <li>
              <button
                onClick={() => handleNavigation("/")}
                className={`text-white text-3xl font-bold ${
                  pathname === "/" ? "underline  text-orange-600" : ""
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/categories")}
                className={`text-white text-3xl font-bold ${
                  pathname === "/categories" ? "underline  text-orange-600" : ""
                }`}
              >
                Categorias
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/about")}
                className={`text-white text-3xl font-bold ${
                  pathname === "/about" ? "underline text-orange-600" : ""
                }`}
              >
                Sobre Mi
              </button>
            </li>
            <li>
              <button
                className={`text-white text-3xl font-bold ${
                  pathname === "/contact" ? "underline text-orange-600" : ""
                }`}
                onClick={() => handleNavigation("/contact")}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
