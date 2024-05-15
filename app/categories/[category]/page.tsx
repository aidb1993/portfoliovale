import Image from "next/image";
import data from "../../data.json";
export default function Category({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const images = data.images.filter((img) => img.category === category);
  return (
    <div className="container">
      <main>
        <section className="flex flex-col gap-4 ">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">{category}</h2>
            <div key="category" className="pt-6">
              <section className="grid gap-6">
                {images.map((image) => (
                  <div key={image.name} className="relative">
                    <Image
                      src={image.url}
                      alt={image.name}
                      width="700"
                      height="300"
                      sizes="(max-width: 640px) 100vw, (min-width: 640px) 50vw"
                      quality={100}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg shadow-lg aspect-square mx-auto"
                    />
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
