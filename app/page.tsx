"use client";
import Image from "next/image";
import data from "./data.json";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Component() {
  const images = data.images;
  const categories: string[] = Array.from(
    new Set(images.map((img) => img.category))
  );
  const imagesByCategory: any = [];
  categories.forEach((category) => {
    imagesByCategory[category] = images.filter(
      (img) => img.category === category
    );
  });
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{
    name: string;
    url: string;
    category: string;
    home: boolean;
    order?: number;
  } | null>(null);

  const filteredImages: any =
    filter === "All" ? images : imagesByCategory[filter];

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // Check if the clicked element is not the zoomed image
      if (
        selectedImage &&
        !event.target.closest(".fixed > div") &&
        !event.target.closest(".relative")
      ) {
        setSelectedImage(null);
      }
    };

    // Add event listener to the entire document
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedImage]);
  return (
    <div className="bg-stone-200">
      <header className="bg-gray-100 py-6 dark:bg-gray-800 sticky top-0 z-30">
        <nav className="container px-4 md:px-6 flex items-center justify-evenly md:justify-start gap-4">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/#gallery"
          >
            Galeria
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/#about"
          >
            Sobre mi
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/#contact"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <div className="p-6 bg-gray-800">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div className="space-y-4 md:mt-[-60px]">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#B8DBD9]">
              Valentina Ferreira Orduna
            </h1>
          </div>
          <Image
            alt="Jenna Doe"
            className="mx-auto rounded-lg object-cover aspect-square"
            height={500}
            src="/Plenilunio (40x50cm, acrílico sobre tela).png"
            width={500}
          />
        </div>
      </div>
      <div className="container px-4 md:px-6 py-12 md:py-24" id="gallery">
        <div className="grid md:grid-cols-[240px_1fr] gap-10">
          <nav className="flex flex-col gap-2 items-start">
            <h3 className="font-semibold">Filtrar por:</h3>
            <button
              onClick={() => setFilter("All")}
              className={`text-gray-500 hover:text-gray-900 hover:font-bold ${
                filter === "All" ? "font-bold" : ""
              }`}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                onClick={() => setFilter(category)}
                key={category}
                className={`text-gray-500 hover:text-gray-900 hover:font-bold  ${
                  filter === category ? "font-bold" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image: any) => (
              <div key={image.name} className="relative group">
                <Image
                  src={image.url}
                  alt={image.name}
                  width="700"
                  height="300"
                  sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw"
                  quality={100}
                  style={{ objectFit: "fill" }}
                  className="rounded-lg shadow-lg aspect-square mx-auto cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col gap-2">
                  <p className="text-sm">{image.name}</p>
                  <p className="text-xs">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          {selectedImage && (
            <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-90 flex items-center justify-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                X
              </button>
              <Image
                src={selectedImage.url}
                alt={selectedImage.name}
                width="700"
                height="300"
                sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw"
                quality={100}
                style={{ objectFit: "fill" }}
                className="rounded-lg shadow-lg aspect-square mx-auto"
              />
            </div>
          )}
        </div>
        <div className="mt-12 md:mt-24 space-y-4" id="about">
          <div className="md:flex gap-4">
            <div className="md:w-[70%] space-y-2 mb-8 md:mb-0">
              <h3 className="font-semibold">Biografia</h3>
              <p className="text-gray-700">
                Valentina Ferreira Orduna es una novel artista paranaense que
                explora actualmente la técnica del acrílico sobre tela. Crea
                paisajes o personajes donde se superponen los mundos oníricos y
                perceptivos, logrando imágenes fuertemente cargadas de
                espiritualidad y significado. Se caracteriza desde sus comienzos
                por una marcada curiosidad que la llevó desde la literatura y la
                traducción a la astrología y el yoga, buscando formas de
                comprender y expresar la esencia que está más allá de lo
                aparente. Su recorrido comenzó como autodidacta para formarse
                luego en talleres de distintas técnicas, profundizando en el
                estudio de la figura humana.
              </p>
            </div>
            <Image
              alt="Valentina Ferreira Orduna"
              className="mx-auto rounded-lg object-cover aspect-square"
              height={500}
              src="/perfilvale.jpg"
              width={300}
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Statement</h3>
            <p className="text-gray-700">
              La elección del color, la composición y la disposición de los
              objetos y las formas en el espacio del bastidor funcionan
              meramente como disparadores que me permiten materializar un estado
              meditativo interior. La fascinación por el mundo de lo simbólico
              carga mis imágenes de arquetipos que intentan despertar en el
              espectador cierta verdad (personal pero a la vez colectiva) que no
              puede ser transmitida con palabras. Mi proceso creativo, como los
              ciclos de la naturaleza, incluye pasar por distintas fases de luz
              y oscuridad: cada obra me atraviesa profundamente y es sostenida
              por mi cuerpo. Mi intento es la expresión de lo único en mí como
              forma de inspirar lo único en cada uno, son olvidar lo universal
              que nos une.
            </p>
          </div>
        </div>
      </div>
      <footer id="contact" className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col">
          <div className="space-y-2 flex flex-col">
            <h3 className="font-semibold text-white">Contacto</h3>
            <p className="text-gray-500 dark:text-gray-400">
              valentinaferreira1995@gmail.com
            </p>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="https://www.instagram.com/vale.ferreiraorduna?igsh=MXAxODB5ajlhMXBubQ=="
              target="_blank"
            >
              <InstagramIcon className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
