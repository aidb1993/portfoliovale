import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      <main>
        <Image
          src="/perfilvale.jpg"
          alt="Valentina Ferreira Orduna"
          width="400"
          height="400"
          sizes="(min-width: 808px) 50vw, 100vw"
          quality={100}
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-lg lg:m-auto aspect-square"
        />
        <section className="flex flex-col gap-4 pt-6">
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Biografia</h2>
            <p>
              Valentina Ferreira Orduna es una novel artista paranaense que
              explora actualmente la técnica del acrílico sobre tela. Crea
              paisajes o personajes donde se superponen los mundos oníricos y
              perceptivos, logrando imágenes fuertemente cargadas de
              espiritualidad y significado. Se caracteriza desde sus comienzos
              por una marcada curiosidad que la llevó desde la literatura y la
              traducción a la astrología y el yoga, buscando formas de
              comprender y expresar la esencia que está más allá de lo aparente.
              Su recorrido como artista comenzó de manera autodidacta para
              formarse luego en talleres de distintas técnicas, profundizando en
              el estudio de la figura humana.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-2">Statement</h2>
            <p>
              La elección del color, la composición y la disposición de los
              objetos y las formas en el espacio del bastidor funcionan
              meramente como disparadores que me permiten materializar un estado
              meditativo interior. La fascinación por el mundo de lo simbólico
              carga mis imágenes de arquetipos que intentan despertar en el
              espectador cierta verdad (personal pero a la vez colectiva) que no
              puede ser transmitida con palabras. Mi proceso creativo, como los
              ciclos de la naturaleza, incluye pasar por distintas fases de luz
              y oscuridad: cada obra me atraviesa profundamente y es sostenida
              por mi cuerpo, recurriendo a veces al baile, a mantras e
              invocaciones que me ayudan a dar a luz cada creación. Mi intento
              es la expresión de lo único en mí como forma de inspirar lo único
              en cada uno, son olvidar lo universal que nos une.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
