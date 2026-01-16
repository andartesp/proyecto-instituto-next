import Noticia from '@/components/Noticia';

export default function Home() {
  const listaNoticias = [
    {
      id: 1,
      titulo: "Dia de Shrek",
      fecha: "Dic 20",
      imagen:
        "shrek.png",
    },
    {
      id: 2,
      titulo: "Dia de Shrek",
      fecha: "Dic 21",
      imagen:
        "shrek.png",
    },
    {
      id: 3,
      titulo: "Dia de Shrek",
      fecha: "Nov 22",
      imagen:
        "shrek.png",
    },
    {
      id: 4,
      titulo: "Big chungus festival",
      fecha: "Dic 16",
      imagen:
        "big-chungus.jpeg",
    },
    {
      id: 5,
      titulo: "Big chungus festival",
      fecha: "Dic 17",
      imagen:
        "big-chungus.jpeg",
    },
    {
      id: 6,
      titulo: "Big chungus festival",
      fecha: "Dic 18",
      imagen:
        "big-chungus.jpeg",
    },
  ];

  return (
    <>
      <section className="h-[50vh] relative" />

      <section className="bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {listaNoticias.map((item) => (
              <Noticia
                key={item.id}
                titulo={item.titulo}
                imagen={item.imagen}
                fecha={item.fecha}
              />
            ))}
          </div>

          <aside className="space-y-10">

            <div className="rounded-lg overflow-hidden border border-zinc-800">
              <img
                alt="Biblioteca Web"
                src="./BiblioWeb.png"
                className="w-full"
              />
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="/default_facebook.png" alt="Facebook" className="w-8 h-8 hover:opacity-80 transition" />
              </a>


            <a href="https://www.youtube.com/@iescuravalerayoutube" target="_blank">
                <img src="/default_youtube.png" alt="Enlace 2" className="w-8 h-8 hover:opacity-80 transition" />
              </a>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h0NG7DxV5iE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="rounded-lg overflow-hidden border border-zinc-800 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h0NG7DxV5iE"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              />
            </div>

          </aside>
        </div>
      </section>
    </>
  );
}