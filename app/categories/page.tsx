import Image from "next/image";
import data from "../data.json";
import Link from "next/link";

export default function Categories() {
  const categories: string[] = Array.from(
    new Set(data.images.map((img) => img.category))
  );
  const imagesByCategory: any = [];
  categories.forEach((category) => {
    imagesByCategory[category] = data.images.filter(
      (img) => img.category === category
    );
  });

  console.log(imagesByCategory);

  return (
    <div className="container">
      <main>
        <section className="flex flex-col gap-4 pt-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Categorías</h2>
            <p>
              En esta sección se muestran las categorías de las obras de la
              artista.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-6 ">
              {Array.from(categories).map((category) => (
                <div key={category}>
                  {
                    <div className="relative max-w-full md:max-w-80 md:m-auto">
                      <Image
                        key={imagesByCategory[category][0].name}
                        src={imagesByCategory[category][0].url}
                        alt={imagesByCategory[category][0].name}
                        width="200"
                        height="300"
                        sizes="100vw"
                        quality={100}
                        style={{
                          width: "100%",
                        }}
                        className="rounded-lg shadow-lg opacity-30 aspect-square"
                      />
                      <Link
                        href={`/categories/${category}`}
                        className="absolute text-3xl font-bold text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      >
                        {category}
                      </Link>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
