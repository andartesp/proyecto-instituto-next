import Noticia from '@/components/Noticia';

export default function Home() {
  const listaNoticias = [
    { id: 1, titulo: "Feliz Navidad 2024", fecha: "Dic 20", imagen: "https://iescuravalera.es/wp-content/uploads/2023/12/navidad.jpg" },
    { id: 2, titulo: "Día de la Bandera", fecha: "Dic 04", imagen: "https://iescuravalera.es/wp-content/uploads/2023/12/bandera.jpg" },
    { id: 3, titulo: "Charla Prevención", fecha: "Nov 28", imagen: "https://iescuravalera.es/wp-content/uploads/2023/11/sanidad.jpg" },
  ];

  return (
    <main>
      <div className="h-[50vh] bg-zinc-900 flex items-center justify-center overflow-hidden">
        <img src="https://iescuravalera.es/wp-content/uploads/2021/09/slider1.jpg" className="w-full h-full object-cover opacity-30 fixed -z-10" />
        <h2 className="text-5xl font-black text-white italic">NOTICIAS</h2>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listaNoticias.map((item) => (
            <Noticia 
              key={item.id}
              titulo={item.titulo} 
              imagen={item.imagen} 
              fecha={item.fecha} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}